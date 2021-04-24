import { promises as fsp } from 'fs';
import * as movieDataJson from '@assets/export/movieDataMINTA.json';

// TODO: if file not exists init has to be default

const initialState = movieDataJson;

export const mediaReducer = (
    state = initialState,
    action: { type: string; payload: Record<string, unknown> }
) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_MEDIA':
            return state;
        case 'UPDATE_MEDIA':
            return state;
        case 'DELETE_MEDIA':
            return state;
        default:
            return state;
    }
};
