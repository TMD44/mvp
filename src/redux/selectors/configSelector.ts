import { store } from '../store';

export const getScanFileTypes = () =>
    store.getState().config.scan_preferences.scan_file_types;

export const getScanPaths = () =>
    store.getState().config.scan_preferences.scan_paths;

export const getScanResults = () =>
    store.getState().config.scan_preferences.scan_results;

export const scanPathsSelector = (state) =>
    state.config.scan_preferences.scan_paths;
