// import * as movieDataJson from '@assets/.storage/movieDB.json';
import fs from 'fs';
import { configureStorageSync } from '@scripts/configureStorage';
import {
    ADD_MEDIA,
    ADD_MEDIA_AT_ONCE,
    ADD_TO_MEDIA,
    DELETE_MEDIA,
    UPDATE_MEDIA,
} from '@redux/actions/mediaActions';
import { movieDbDefaultState } from '@redux/defaultStates/defaultStates';

let initialState = movieDbDefaultState;

try {
    const mediaPath: string = configureStorageSync('movieDB');

    initialState = JSON.parse(fs.readFileSync(mediaPath, 'utf8'));
} catch (error) {
    console.error(error);
}

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

        case ADD_TO_MEDIA:
            return {
                ...state,
                all_media: {
                    ...state.all_media,
                    [payload.id]: {
                        ...state.all_media[payload.id],
                        metadata: {
                            ...state.all_media[payload.id].metadata,
                            ...payload.media,
                        },
                    },
                },
            };

        case UPDATE_MEDIA:
            return state;

        case DELETE_MEDIA:
            return state;

        default:
            return state;
    }
};
