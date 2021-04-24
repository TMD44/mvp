import * as configDataJson from '@assets/config/configMINTA.json';

// TODO: if file not exists init has to be default

const initialState = configDataJson;

export const configReducer = (
    state = initialState,
    action: { type: string; payload: Record<string, unknown> }
) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_CONFIG':
            return state;
        case 'UPDATE_CONFIG':
            return state;
        case 'DELETE_CONFIG':
            return state;
        default:
            return state;
    }
};
