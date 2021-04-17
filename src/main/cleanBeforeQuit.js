import { unlink } from 'fs';

export function cleanBeforeQuit(data = true, config = true) {
    if (data) {
        unlink('E:\\GIT\\mvp\\exports\\movieData.json', err => {
            if (err) {
                //console.error('\x1b[35m%s\x1b[0m', err);
                console.log('\x1b[35m%s\x1b[0m', 'MovieData file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'MovieData file removed!');
        });
    }
    if (config) {
        unlink('E:\\GIT\\mvp\\config\\config.json', err => {
            if (err) {
                //console.error('\x1b[35m%s\x1b[0m', err);
                console.log('\x1b[35m%s\x1b[0m', 'Config file not found!');
                return;
            }
            console.log('\x1b[31m%s\x1b[0m', 'Config file removed!');
        });
    }
}
