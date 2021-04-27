import path from 'path';

const ASSETS_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets')
        : path.join(__dirname, '../../assets');

const STORAGE_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets/.storage')
        : path.join(__dirname, '../../assets/.storage');

const EXPORTS_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets/exports')
        : path.join(__dirname, '../../assets/exports');

const IMAGES_PATH =
    process.env.NODE_ENV === 'production'
        ? path.join(process.resourcesPath, '../resources/assets/images')
        : path.join(__dirname, '../../assets/images');

export const getAssetsPath = (...paths: string[]): string => {
    return path.join(ASSETS_PATH, ...paths);
};

export const getStoragePath = (...paths: string[]): string => {
    return path.join(STORAGE_PATH, ...paths);
};

export const getExportsPath = (...paths: string[]): string => {
    return path.join(EXPORTS_PATH, ...paths);
};

export const getImagesPath = (...paths: string[]): string => {
    return path.join(IMAGES_PATH, ...paths);
};
