import fs, { promises as fsp } from 'fs';
import {
    configDefaultState,
    mediaDefaultState,
} from '../redux/defaultStates/defaultStates';
import { getStoragePath } from './getPaths';

const CONFIG_FILE_PATH = getStoragePath('config.json');
const MEDIA_DB_FILE_PATH = getStoragePath('mediaDB.json');

const fileIsExistsSync = (file: 'config' | 'mediaDB') => {
    try {
        switch (file) {
            case 'config':
                fs.accessSync(CONFIG_FILE_PATH);
                return true;

            case 'mediaDB':
                fs.accessSync(MEDIA_DB_FILE_PATH);
                return true;

            default:
                return false;
        }
    } catch {
        return false;
    }
};

const writeFileIfNotExistsSync = () => {
    const configIsExists = fileIsExistsSync('config');
    const mediaDbIsExists = fileIsExistsSync('mediaDB');

    try {
        if (!configIsExists) {
            fs.writeFileSync(
                CONFIG_FILE_PATH,
                JSON.stringify(configDefaultState, null, 4),
                'utf8'
            );
        }

        if (!mediaDbIsExists) {
            fs.writeFileSync(
                MEDIA_DB_FILE_PATH,
                JSON.stringify(mediaDefaultState, null, 4),
                'utf8'
            );
        }
    } catch (error) {
        console.error('Error from configureStorage.ts: ', error);
    }
};

export const configureStorageSync = (file: 'config' | 'mediaDB'): string => {
    writeFileIfNotExistsSync();

    switch (file) {
        case 'config':
            return CONFIG_FILE_PATH;

        case 'mediaDB':
            return MEDIA_DB_FILE_PATH;

        default:
            return '';
    }
};

// ASYNCRONOUS
/*
const fileIsExists = async (file: 'config' | 'mediaDB') => {
    try {
        switch (file) {
            case 'config':
                await fsp.access(CONFIG_FILE_PATH);
                return true;

            case 'mediaDB':
                await fsp.access(MEDIA_DB_FILE_PATH);
                return true;

            default:
                return false;
        }
    } catch {
        return false;
    }
};

export const configureStorage = async (file: 'config' | 'mediaDB') => {
    let result = '';
    const configIsExists = await fileIsExists('config');
    const mediaDbIsExists = await fileIsExists('mediaDB');

    if (!configIsExists) {
        await fsp.writeFile(
            CONFIG_FILE_PATH,
            JSON.stringify(configDefaultState, null, 4),
            'utf8'
        );
    }

    if (!mediaDbIsExists) {
        await fsp.writeFile(
            MEDIA_DB_FILE_PATH,
            JSON.stringify(mediaDefaultState, null, 4),
            'utf8'
        );
    }

    return result;
};
*/
