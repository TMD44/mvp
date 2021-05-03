/* eslint-disable prefer-destructuring */
import { addToMedia } from '@redux/actions/mediaActions';
import store from '@redux/store';
import { imdbIdExists, remodelData } from './dataSelection';
import { tmdbRequest } from './tmdbRequests';

const tmdbDataCleaning = (obj: Record<string, unknown>) => {
    let result;
    Object.entries(obj.data).forEach(([key, arr]) => {
        if (arr.length > 0) {
            switch (key) {
                case 'movie_results':
                    result = arr[0];
                    result.media_type = 'movie';
                    break;

                case 'tv_results':
                case 'tv_season_results':
                case 'tv_episode_results':
                    result = arr[0];
                    result.media_type = 'series';
                    break;

                default:
                    result = arr[0];
                    result.media_type = 'UNKNOWN';
                    break;
            }
        }
    });
    let finalResult;
    if (result) {
        finalResult = remodelData(result);
    }
    return finalResult;
};

export const getTMDBdata = async (obj: Record<string, unknown>) => {
    if (imdbIdExists(obj)) {
        const data = await tmdbRequest.findByExternalID(
            obj.metadata.imdb_id,
            'imdb_id'
        );
        store.dispatch(addToMedia(obj.id, tmdbDataCleaning(data)));
    } else {
        // TODO: IMDB not found: name-year search on tmdb
    }
};
