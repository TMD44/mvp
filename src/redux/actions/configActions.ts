export const ADD_CONFIG = 'ADD_CONFIG';
export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const DELETE_CONFIG = 'DELETE_CONFIG';

export const addConfig = (config: any) => ({
    type: ADD_CONFIG,
    payload: config,
});

export const updateConfig = (config: any) => ({
    type: UPDATE_CONFIG,
    payload: config,
});

export const deleteConfig = (config: any) => ({
    type: DELETE_CONFIG,
    payload: config,
});
