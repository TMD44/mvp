// PROBLEMS WITH FORs: TODO
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */

import { config } from '@main/configuration';
import { getExportPath } from 'src/scripts/getPaths';
import {
    mediaJSONGenerator,
    completeJSONGenerator,
    printJSONToFile,
} from './json';
import { scanDir } from './tools/scanDir';
import { fileSorting, excludedFromScan } from './fileSorting';

export const scan = {
    completeJSON: {},
    mediaInJSON: {},

    offlineScan: async () => {
        const scanResults = {
            media: [],
            sub: [],
            nfo: [],
        };

        const { media, sub, nfo } = await config.getFileTypes();

        const paths = await config.getScanPaths();

        for (const i in paths) {
            const files = await scanDir(paths[i], [media, sub, nfo].flat());
            for (const j in files) {
                if (!excludedFromScan(files[j])) {
                    await fileSorting(files[j], media, sub, nfo, scanResults);
                }
            }
        }

        await config.setScanResults(scanResults);
        const results = await config.getScanResults();

        for (const file in results.media) {
            const result = await mediaJSONGenerator(
                results.media[file],
                results
            );
            scan.mediaInJSON[result.id] = result;
        }

        scan.completeJSON = await completeJSONGenerator(scan.mediaInJSON);
        await printJSONToFile(
            getExportPath('movieData.json'),
            scan.completeJSON
        );

        // purgeScanResults();
    },

    onlineScan: () => {
        /* return tmdb
            .multiSearch(scan.mediaInJSON.unsure_metadata.filename_data.title)
            .then((result) => {
                scan.mediaInJSON.unsure_metadata.tmdb_data =
                    result.data.results[0];
                console.log('mediaInJSON: ', scan.mediaInJSON);
                return scan.mediaInJSON;
            }); */
    },
};
