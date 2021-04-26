import fs, { promises as fsp } from 'fs';
import {
    configDefaultState,
    movieDbDefaultState,
} from '../redux/defaultStates/defaultStates';
import { getStoragePath } from './getPaths';

const CONFIG_FILE_PATH = getStoragePath('config.json');
const MOVIE_DB_FILE_PATH = getStoragePath('movieDB.json');

type FileType = 'config' | 'movieDB';

const fileIsExistsSync = (file: FileType) => {
    try {
        switch (file) {
            case 'config':
                fs.accessSync(CONFIG_FILE_PATH);
                return true;

            case 'movieDB':
                fs.accessSync(MOVIE_DB_FILE_PATH);
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
    const movieDbIsExists = fileIsExistsSync('movieDB');

    if (!configIsExists) {
        fs.writeFileSync(
            CONFIG_FILE_PATH,
            JSON.stringify(configDefaultState, null, 4),
            'utf8'
        );
    } else {
        console.log('CONFIG ALEADY EXISTS!');
    }

    if (!movieDbIsExists) {
        fs.writeFileSync(
            MOVIE_DB_FILE_PATH,
            JSON.stringify(movieDbDefaultState, null, 4),
            'utf8'
        );
    } else {
        console.log('MOVIE_DB ALEADY EXISTS!');
    }
};

export const configureStorageSync = (file: FileType): string => {
    writeFileIfNotExistsSync();

    switch (file) {
        case 'config':
            return CONFIG_FILE_PATH;

        case 'movieDB':
            return MOVIE_DB_FILE_PATH;

        default:
            return '';
    }
};

// ASYNCRONOUS
/*
const fileIsExists = async (file: FileType) => {
    try {
        switch (file) {
            case 'config':
                await fsp.access(CONFIG_FILE_PATH);
                return true;

            case 'movieDB':
                await fsp.access(MOVIE_DB_FILE_PATH);
                return true;

            default:
                return false;
        }
    } catch {
        return false;
    }
};

export const configureStorage = async (file: FileType) => {
    let result = '';
    const configIsExists = await fileIsExists('config');
    const movieDbIsExists = await fileIsExists('movieDB');

    if (!configIsExists) {
        await fsp.writeFile(
            CONFIG_FILE_PATH,
            JSON.stringify(configDefaultState, null, 4),
            'utf8'
        );
    } else {
        console.log('CONFIG ALEADY EXISTS!');
    }

    if (!movieDbIsExists) {
        await fsp.writeFile(
            MOVIE_DB_FILE_PATH,
            JSON.stringify(movieDbDefaultState, null, 4),
            'utf8'
        );
    } else {
        console.log('MOVIE_DB ALEADY EXISTS!');
    }

    return result;
};
*/
