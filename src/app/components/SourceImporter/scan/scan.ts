/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import {
    getScanFileTypes,
    getScanPaths,
    getScanResults,
} from '@redux/selectors/configSelector';
import store from '@redux/store';
import {
    addScanResults,
    deleteAllScanResults,
} from '@redux/actions/configActions';
import {
    addMediaAtOnce,
    purgeMovies,
    purgeSeries,
} from '@redux/actions/mediaActions';
import { getAllMedia } from '@redux/selectors/mediaSelector';
import { AllMediaType } from '@type/MediaType';
import { ScanResultsType } from '@type/ConfigType';
import { fileSorting, excludedFromScan } from './fileSorting';
import { scanDir } from './scanDir';
import { mediaJSONGenerator } from './json';
import { getTMDBdata } from '../tmdb/tmdb';
import { mediaTypeSorting } from './mediaTypeSorting';

export const scan = {
    offlineScan: async () => {
        const mediaInJSON = {} as AllMediaType;

        const scanResults: ScanResultsType = {
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
                    fileSorting(files[j], media, sub, nfo, scanResults);
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
            mediaInJSON[result.id] = result;
            // store.dispatch(addMedia(result));
        }

        store.dispatch(addMediaAtOnce(mediaInJSON));

        // store.dispatch(purgeMovies());
        // store.dispatch(purgeSeries());

        store.dispatch(deleteAllScanResults());

        const allMedia = getAllMedia();
        for (const [key, value] of Object.entries(allMedia)) {
            mediaTypeSorting(key, value, allMedia);
        }

        return true;
    },

    onlineScan: async () => {
        for (const [, value] of Object.entries(getAllMedia())) {
            await getTMDBdata(value);
        }

        store.dispatch(purgeMovies());
        store.dispatch(purgeSeries());

        const allMedia = getAllMedia();
        for (const [key, value] of Object.entries(allMedia)) {
            mediaTypeSorting(key, value, allMedia);
        }

        return true;
    },
};
