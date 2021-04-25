import * as configDataJson from '@assets/.storage/config.json';

import {
    UPDATE_SCAN_LANGUAGE,
    DELETE_SCAN_PATH,
    ADD_SCAN_PATH,
    UPDATE_MEDIA_FILE_TYPES,
    UPDATE_SUB_FILE_TYPES,
    UPDATE_NFO_FILE_TYPES,
    ADD_SCAN_RESULTS,
    DELETE_ALL_SCAN_RESULTS,
    DELETE_ALL_SCAN_PATHS,
} from '../actions/configActions';

const initialState = configDataJson;

export const configReducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    }
) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_SCAN_LANGUAGE:
            return {
                ...state,
                scan_language: payload,
            };
        case ADD_SCAN_PATH:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_paths: [
                        ...state.scan_preferences.scan_paths.filter(
                            (path: string) => path !== payload
                        ),
                        payload,
                    ],
                },
            };
        case DELETE_SCAN_PATH:
            // if not exists nothing happens
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_paths: state.scan_preferences.scan_paths.filter(
                        (path: string) => path !== payload
                    ),
                },
            };
        case DELETE_ALL_SCAN_PATHS:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_paths: payload,
                },
            };
        case UPDATE_MEDIA_FILE_TYPES:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_file_types: {
                        ...state.scan_preferences.scan_file_types,
                        media: payload,
                    },
                },
            };
        case UPDATE_SUB_FILE_TYPES:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_file_types: {
                        ...state.scan_preferences.scan_file_types,
                        sub: payload,
                    },
                },
            };
        case UPDATE_NFO_FILE_TYPES:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_file_types: {
                        ...state.scan_preferences.scan_file_types,
                        nfo: payload,
                    },
                },
            };
        case ADD_SCAN_RESULTS:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_results: payload,
                },
            };
        case DELETE_ALL_SCAN_RESULTS:
            return {
                ...state,
                scan_preferences: {
                    ...state.scan_preferences,
                    scan_results: payload,
                },
            };
        default:
            return state;
    }
};
