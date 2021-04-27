import { addToMedia } from '@redux/actions/mediaActions';
import store from '@redux/store';
import { imdbIdExists, remodelData } from '@scripts/dataSelection';
import { tmdbRequest } from './tmdbRequests';

const tmdbDataCleaning = (obj: Record<string, unknown>) => {
    let result;
    Object.values(obj.data).forEach((arr) => {
        if (arr.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            result = arr[0];
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
            obj.movieDB_id.imdb_id,
            'imdb_id'
        );
        store.dispatch(addToMedia(obj.id, tmdbDataCleaning(data)));
    } else {
        // TODO: IMDB not found: name-year search on tmdb
    }
};
