export const UPDATE_SCAN_LANGUAGE = 'UPDATE_SCAN_LANGUAGE';
export const UPDATE_MEDIA_FILE_TYPES = 'UPDATE_MEDIA_FILE_TYPES';
export const UPDATE_SUB_FILE_TYPES = 'UPDATE_SUB_FILE_TYPES';
export const UPDATE_NFO_FILE_TYPES = 'UPDATE_NFO_FILE_TYPES';
export const ADD_SCAN_PATH = 'ADD_SCAN_PATH';
export const DELETE_SCAN_PATH = 'DELETE_SCAN_PATH';
export const DELETE_ALL_SCAN_PATHS = 'DELETE_ALL_SCAN_PATHS';
export const ADD_SCAN_RESULTS = 'ADD_SCAN_RESULTS';
export const DELETE_ALL_SCAN_RESULTS = 'DELETE_ALL_SCAN_RESULTS';

// SCAN LANGUAGE: UPDATE
export const updateScanLanguage = (language: string) => ({
    type: UPDATE_SCAN_LANGUAGE,
    payload: language,
});

// SCAN PATHS: ADD, DELETE
export const addScanPath = (path: string) => ({
    type: ADD_SCAN_PATH,
    payload: path,
});
export const deleteScanPath = (path: string) => ({
    type: DELETE_SCAN_PATH,
    payload: path,
});
export const deleteAllScanPaths = () => ({
    type: DELETE_ALL_SCAN_PATHS,
    payload: [] as [],
});

// SCAN FILE TYPES: UPDATE
export const updateMediaFileTypes = (fileTypes: string[]) => ({
    type: UPDATE_MEDIA_FILE_TYPES,
    payload: fileTypes,
});
export const updateSubFileTypes = (fileTypes: string[]) => ({
    type: UPDATE_SUB_FILE_TYPES,
    payload: fileTypes,
});
export const updateNfoFileTypes = (fileTypes: string[]) => ({
    type: UPDATE_NFO_FILE_TYPES,
    payload: fileTypes,
});

// SCAN RESULTS: ADD, DELETE
export const addScanResults = (path: Record<string, unknown>) => ({
    type: ADD_SCAN_RESULTS,
    payload: path,
});
export const deleteAllScanResults = () => ({
    type: DELETE_ALL_SCAN_RESULTS,
    payload: {},
});
