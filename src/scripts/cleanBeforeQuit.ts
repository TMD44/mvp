import fs from 'fs';
import { getStoragePath } from './getPaths';

export const cleanBeforeQuit = (media = true, config = true) => {
    if (media) {
        fs.unlink(getStoragePath('mediaDB.json'), (err) => {
            if (err) {
                console.log('\x1b[35m%s\x1b[0m', 'mediaDB file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'mediaDB file removed!');
        });
    }
    if (config) {
        fs.unlink(getStoragePath('config.json'), (err) => {
            if (err) {
                console.log('\x1b[35m%s\x1b[0m', 'Config file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'Config file removed!');
        });
    }
};
