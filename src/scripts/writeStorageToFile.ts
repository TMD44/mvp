import { promises as fsp } from 'fs';
import { store } from '../redux/store';
import { getStoragePath } from './getPaths';

const CONFIG_FILE_PATH = getStoragePath('config.json');
const MOVIE_DB_FILE_PATH = getStoragePath('movieDB.json');

export const writeStorageBeforeQuit = async () => {
    const CONFIG_DATA = store.getState().config;
    const MEDIA_DATA = store.getState().media;
    delete CONFIG_DATA.default;
    delete MEDIA_DATA.default;

    try {
        await fsp.writeFile(
            CONFIG_FILE_PATH,
            JSON.stringify(CONFIG_DATA, null, 4),
            'utf8'
        );
        await fsp.writeFile(
            MOVIE_DB_FILE_PATH,
            JSON.stringify(MEDIA_DATA, null, 4),
            'utf8'
        );
    } catch (error) {
        console.error(error);
    }
};
