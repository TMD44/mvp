import { unlink } from 'fs';
import { getConfigPath, getExportPath } from './getPaths';

export function cleanBeforeQuit(data = true, config = true) {
    if (data) {
        unlink(getExportPath('movieData.json'), (err) => {
            if (err) {
                console.log('\x1b[35m%s\x1b[0m', 'MovieData file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'MovieData file removed!');
        });
    }
    if (config) {
        unlink(getConfigPath('config.json'), (err) => {
            if (err) {
                console.log('\x1b[35m%s\x1b[0m', 'Config file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'Config file removed!');
        });
    }
}
