/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import {
    getScanFileTypes,
    getScanPaths,
    getScanResults,
} from '@redux/selectors/configSelector';
import { store } from '@redux/store';
import { addScanResults } from '@redux/actions/configActions';
import { addMedia, addMediaAtOnce } from '@redux/actions/mediaActions';
import { fileSorting, excludedFromScan } from './fileSorting';
import { scanDir } from './tools/scanDir';
import { mediaJSONGenerator } from './json';

export const scan = {
    mediaInJSON: {},

    offlineScan: async () => {
        const scanResults = {
            media: [],
            sub: [],
            nfo: [],
        };

        const { media, sub, nfo } = getScanFileTypes();

        const paths = getScanPaths();

        for (const i in paths) {
            const files = await scanDir(paths[i], [media, sub, nfo].flat());
            for (const j in files) {
                if (!excludedFromScan(files[j])) {
                    await fileSorting(files[j], media, sub, nfo, scanResults);
                }
            }
        }

        store.dispatch(addScanResults(scanResults));
        const results = getScanResults();

        for (const file in results.media) {
            const result = await mediaJSONGenerator(
                results.media[file],
                results
            );
            scan.mediaInJSON[result.id] = result;
            // store.dispatch(addMedia(result));
        }

        store.dispatch(addMediaAtOnce(scan.mediaInJSON));
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
