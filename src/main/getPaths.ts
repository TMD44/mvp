import path from 'path';

const ASSETS_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets')
        : path.join(__dirname, '../../assets');

const CONFIG_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets/config')
        : path.join(__dirname, '../../config');

const EXPORTS_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets/export')
        : path.join(__dirname, '../../export');

export const getAssetsPath = (...paths: string[]): string => {
    return path.join(ASSETS_PATH, ...paths);
};

export const getConfigPath = (...paths: string[]): string => {
    return path.join(CONFIG_PATH, ...paths);
};

export const getExportPath = (...paths: string[]): string => {
    return path.join(EXPORTS_PATH, ...paths);
};
