import { unlink } from 'fs';
import { getStoragePath } from '../scripts/getPaths';

export function cleanBeforeQuit(data = true, config = true) {
    if (data) {
        unlink(getStoragePath('movieData.json'), (err) => {
            if (err) {
                console.log('\x1b[35m%s\x1b[0m', 'MovieData file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'MovieData file removed!');
        });
    }
    if (config) {
        unlink(getStoragePath('config.json'), (err) => {
            if (err) {
                console.log('\x1b[35m%s\x1b[0m', 'Config file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'Config file removed!');
        });
    }
}
