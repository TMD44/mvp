/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import {
    getScanFileTypes,
    getScanPaths,
    getScanResults,
} from '@redux/selectors/configSelector';
import store from '@redux/store';
import { addScanResults } from '@redux/actions/configActions';
import { addMedia, addMediaAtOnce } from '@redux/actions/mediaActions';
import { fileSorting, excludedFromScan } from './fileSorting';
import { scanDir } from './scanDir';
import { mediaJSONGenerator } from './json';
import { tmdbRequest } from '../tmdb/tmdbRequests';
import { getTMDBdata } from '../tmdb/tmdb';

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

        return true;
    },

    onlineScan: async () => {
        for (const [key, value] of Object.entries(
            store.getState().media.all_media
        )) {
            await getTMDBdata(value);
        }

        return true;
    },
};
