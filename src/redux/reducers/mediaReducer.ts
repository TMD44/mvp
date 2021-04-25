import * as movieDataJson from '@assets/.storage/movieDB.json';
import {
    ADD_MEDIA,
    ADD_MEDIA_AT_ONCE,
    DELETE_MEDIA,
    UPDATE_MEDIA,
} from '@redux/actions/mediaActions';

const initialState = movieDataJson;

export const mediaReducer = (
    state = initialState,
    action: { type: string; payload: Record<string, unknown> }
) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_MEDIA:
            return {
                ...state,
                all_media: { ...state.all_media, ...payload },
            };
        case ADD_MEDIA_AT_ONCE:
            return {
                ...state,
                all_media: payload,
            };
        case UPDATE_MEDIA:
            return state;
        case DELETE_MEDIA:
            return state;
        default:
            return state;
    }
};
