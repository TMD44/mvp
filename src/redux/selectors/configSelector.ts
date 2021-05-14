import { StateType } from '@type/StateType';
import store from '../store';

// GETTERS
export const getAppInfo = () => store.getState().config.app_info;

export const getScanFileTypes = () =>
    store.getState().config.scan_preferences.scan_file_types;

export const getScanPaths = () =>
    store.getState().config.scan_preferences.scan_paths;

export const getScanResults = () =>
    store.getState().config.scan_preferences.scan_results;

// SELECTORS
export const scanPathsSelector = (state: StateType) =>
    state.config.scan_preferences.scan_paths;
