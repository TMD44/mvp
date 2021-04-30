// import * as movieDataJson from '@assets/.storage/movieDB.json';
import fs from 'fs';
import { configureStorageSync } from '@scripts/configureStorage';
import {
    ADD_MEDIA,
    ADD_MEDIA_AT_ONCE,
    ADD_MOVIE,
    ADD_SERIES,
    ADD_TO_MEDIA,
    DELETE_MEDIA,
    PURGE_MOVIES,
    PURGE_SERIES,
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
    action: {
        type: string;
        payload: string | string[] | Record<string, unknown>;
    }
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
            // TODO
            return state;

        case DELETE_MEDIA:
            // TODO
            return state;

        case ADD_MOVIE:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    [payload]: {
                        ...state.movies[payload],
                        id: [payload],
                        media_type: 'movie',
                    },
                },
            };

        case ADD_SERIES:
            if (!state.tv_series[payload.title]) {
                state.tv_series[payload.title] = {};
                if (!state.tv_series[payload.title].id) {
                    state.tv_series[payload.title].id = [];
                }
            }

            return {
                ...state,
                tv_series: {
                    ...state.tv_series,
                    [payload.title]: {
                        ...state.tv_series[payload.title],
                        id: [...state.tv_series[payload.title].id, payload.id],
                        media_type: 'series',
                    },
                },
            };

        case PURGE_MOVIES:
            return {
                ...state,
                movies: payload,
            };

        case PURGE_SERIES:
            return {
                ...state,
                series: payload,
            };

        default:
            return state;
    }
};
