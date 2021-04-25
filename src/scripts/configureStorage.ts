import fs from 'fs';
import {
    configDefaultState,
    movieDbDefaultState,
} from '../redux/defaultStates/defaultStates';
import { getStoragePath } from './getPaths';

const CONFIG_FILE_PATH = getStoragePath('config.json');
const MOVIE_DB_FILE_PATH = getStoragePath('movieDB.json');

type FileType = 'config' | 'movieDB';

export const fileIsExists = (file: FileType) => {
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

export const configureStorage = () => {
    const configIsExists = fileIsExists('config');
    const movieDbIsExists = fileIsExists('movieDB');

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

// ASYNCRONOUS
/*
import { promises as fsp } from 'fs';

const fileIsExistsAsync = async (file: FileType) => {
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

export const configureStorageAsync = async () => {
    const configIsExists = await fileIsExistsAsync('config');
    const movieDbIsExists = await fileIsExistsAsync('movieDB');

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
};
*/
