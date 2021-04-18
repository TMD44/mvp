import { writeFileSync } from 'fs';
import { error, info, warn } from 'electron-log';

export function createLog(logType = 'info', message = '') {
    switch (logType) {
        case 'error':
            console.log(message);
            error(message);
            break;
        case 'info':
            console.log(message);
            info(message);
            break;
        case 'warn':
            console.log(message);
            warn(message);
            break;
        default:
            break;
    }
}

export function clearLog() {
    return writeFileSync('./log/log.txt', '');
}
