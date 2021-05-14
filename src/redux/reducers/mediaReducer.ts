// import * as movieDataJson from '@assets/.storage/movieDB.json';
import fs from 'fs';
import { omit } from 'lodash';
import { configureStorageSync } from '@scripts/configureStorage';
import {
    ADD_MEDIA,
    ADD_MEDIA_AT_ONCE,
    ADD_MOVIE,
    ADD_SERIES,
    ADD_TO_MEDIA,
    ADD_COVER_TO_MEDIA,
    DELETE_COVER_FROM_MEDIA,
    DELETE_MEDIA,
    PURGE_MOVIES,
    PURGE_SERIES,
    PURGE_ALL_MEDIA,
    ADD_PLAYLIST,
    DELETE_PLAYLIST,
    ADD_MEDIA_TO_PLAYLIST,
    DELETE_MEDIA_FROM_PLAYLIST,
} from '@redux/actions/mediaActions';
import { mediaDefaultState } from '@redux/defaultStates/defaultStates';
import { getDateAndTime } from '@scripts/date';

let initialState = mediaDefaultState;

try {
    const mediaPath: string = configureStorageSync('mediaDB');

    initialState = JSON.parse(fs.readFileSync(mediaPath, 'utf8'));
} catch (error) {
    console.error('Error from mediaReducer.ts: ', error);
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
                all_media: { ...state.all_media, ...payload },
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

        case ADD_COVER_TO_MEDIA:
            return {
                ...state,
                all_media: {
                    ...state.all_media,
                    [payload.id]: {
                        ...state.all_media[payload.id],
                        metadata: {
                            ...state.all_media[payload.id].metadata,
                            poster_path: payload.media,
                        },
                    },
                },
            };

        case DELETE_COVER_FROM_MEDIA:
            return {
                ...state,
                all_media: {
                    ...state.all_media,
                    [payload]: {
                        ...state.all_media[payload],
                        metadata: omit(
                            state.all_media[payload].metadata,
                            'poster_path'
                        ),
                    },
                },
            };

        case DELETE_MEDIA:
            return {
                ...state,
                all_media: omit(state.all_media, payload.id),
                movies: omit(state.movies, payload.id),
                tv_series: omit(state.tv_series, payload.title),
                playlists: {
                    ...state.playlists,
                    [payload.playlist]: {
                        ...state.playlists[payload.playlist],
                        contents: omit(state.tv_series, [
                            payload.id,
                            payload.title,
                        ]),
                    },
                },
            };

        case ADD_MOVIE:
            if (!state.movies[payload]) {
                state.movies[payload] = {};
                if (!state.movies[payload].id) {
                    state.movies[payload].id = [];
                }
            }

            return {
                ...state,
                movies: {
                    ...state.movies,
                    [payload]: {
                        ...state.movies[payload],
                        id: [
                            ...state.movies[payload].id.filter(
                                (movie: string) => movie !== payload
                            ),
                            payload,
                        ],
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
                        id: [
                            ...state.tv_series[payload.title].id.filter(
                                (series: string) => series !== payload.id
                            ),
                            payload.id,
                        ],
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
                tv_series: payload,
            };
        case PURGE_ALL_MEDIA:
            // TODO: in default state, there are dummy thing in it
            // Error has occure
            // return movieDbDefaultState;
            return {
                creation_time: getDateAndTime(),
                modification_time: getDateAndTime(),
                movies: {},
                tv_series: {},
                playlists: {
                    Favorites: {
                        contents: {},
                        media_type: 'playlist',
                    },
                },
                all_media: {},
            };

        case ADD_PLAYLIST:
            return {
                ...state,
                playlists: {
                    ...state.playlists,
                    [payload]: { contents: {}, media_type: 'playlist' },
                },
            };

        case DELETE_PLAYLIST:
            return {
                ...state,
                playlists: omit(state.playlists, payload),
            };

        case ADD_MEDIA_TO_PLAYLIST:
            return {
                ...state,
                playlists: {
                    ...state.playlists,
                    [payload.playlist]: {
                        contents: {
                            ...state.playlists[payload.playlist].contents,
                            [payload.title]: {
                                ...state.playlists[payload.playlist].contents[
                                    payload.title
                                ],
                                ...payload.media,
                            },
                        },
                        media_type: 'playlist',
                    },
                },
            };

        case DELETE_MEDIA_FROM_PLAYLIST:
            return {
                ...state,
                playlists: {
                    ...state.playlists,
                    [payload.playlist]: {
                        contents: omit(
                            state.playlists[payload.playlist].contents,
                            payload.title
                        ),
                        media_type: 'playlist',
                    },
                },
            };

        default:
            return state;
    }
};
