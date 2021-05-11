import fs, { promises as fsp } from 'fs';
import store from '@redux/store';
import { getStoragePath } from './getPaths';

const CONFIG_FILE_PATH = getStoragePath('config.json');
const MEDIA_DB_FILE_PATH = getStoragePath('mediaDB.json');

export const writeStorageBeforeQuitSync = () => {
    const CONFIG_DATA = store.getState().config;
    const MEDIA_DATA = store.getState().media;

    try {
        fs.writeFileSync(
            CONFIG_FILE_PATH,
            JSON.stringify(CONFIG_DATA, null, 4),
            'utf8'
        );
        fs.writeFileSync(
            MEDIA_DB_FILE_PATH,
            JSON.stringify(MEDIA_DATA, null, 4),
            'utf8'
        );
    } catch (error) {
        console.error('Error from writeStorageToFile.ts: ', error);
    }
};

export const writeStorageBeforeQuitAsync = async () => {
    const CONFIG_DATA = store.getState().config;
    const MEDIA_DATA = store.getState().media;

    try {
        await fsp.writeFile(
            CONFIG_FILE_PATH,
            JSON.stringify(CONFIG_DATA, null, 4),
            'utf8'
        );
        await fsp.writeFile(
            MEDIA_DB_FILE_PATH,
            JSON.stringify(MEDIA_DATA, null, 4),
            'utf8'
        );
    } catch (error) {
        console.error('Error from writeStorageToFile.ts: ', error);
    }
};
