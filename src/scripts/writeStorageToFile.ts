import fs, { promises as fsp } from 'fs';
import store from '@redux/store';
import { getStoragePath } from './getPaths';

const CONFIG_FILE_PATH = getStoragePath('config.json');
const MOVIE_DB_FILE_PATH = getStoragePath('movieDB.json');

export const writeStorageBeforeQuitSync = () => {
    const CONFIG_DATA = store.getState().config;
    const MEDIA_DATA = store.getState().media;
    // TODO: "default" object also writen to the file somehow
    // if (store.getState().config.default) delete CONFIG_DATA.default;
    // if (store.getState().media.default) delete MEDIA_DATA.default;

    // TODO: config file-t sokszor üresen írja ki

    try {
        fs.writeFileSync(
            CONFIG_FILE_PATH,
            JSON.stringify(CONFIG_DATA, null, 4),
            'utf8'
        );
        fs.writeFileSync(
            MOVIE_DB_FILE_PATH,
            JSON.stringify(MEDIA_DATA, null, 4),
            'utf8'
        );
    } catch (error) {
        console.error(error);
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
            MOVIE_DB_FILE_PATH,
            JSON.stringify(MEDIA_DATA, null, 4),
            'utf8'
        );
    } catch (error) {
        console.error(error);
    }
};
