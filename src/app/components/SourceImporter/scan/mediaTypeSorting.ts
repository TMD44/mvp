import { addMovie, addSeries } from '@redux/actions/mediaActions';
import { getAllMedia } from '@redux/selectors/mediaSelector';
import store from '@redux/store';
import { keys } from 'regenerator-runtime';

export const mediaTypeSorting = () => {
    const allMedia = getAllMedia();

    Object.entries(allMedia).forEach(([key, obj]) => {
        if (obj.metadata.media_type) {
            if (obj.metadata.media_type === 'movie') {
                store.dispatch(addMovie(key));
            }
            if (obj.metadata.media_type === 'series') {
                store.dispatch(addSeries(allMedia[key].metadata.title, key));
            }
        }
    });
};
