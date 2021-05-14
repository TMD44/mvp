/* eslint-disable no-restricted-syntax */
import { addMovie, addSeries } from '@redux/actions/mediaActions';
import store from '@redux/store';
import { AllMediaDataType, AllMediaType } from '@type/MediaType';

export const mediaTypeSorting = (
    key: string,
    obj: AllMediaDataType,
    allMedia: AllMediaType
) => {
    if (obj.metadata.media_type) {
        if (obj.metadata.media_type === 'movie') {
            store.dispatch(addMovie(key));
        }
        if (obj.metadata.media_type === 'series') {
            store.dispatch(addSeries(allMedia[key].metadata.title, key));
        }
    }
};
