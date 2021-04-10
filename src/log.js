const fs = require('fs');
const log = require('electron-log');

function createLog(logType = 'info', message = '') {
    switch (logType) {
        case 'error':
            console.log(message);
            log.error(message);
            break;
        case 'info':
            console.log(message);
            log.info(message);
            break;
        case 'warn':
            console.log(message);
            log.warn(message);
            break;
        default:
            break;
    }
}

function clearLog() {
    return fs.writeFileSync('./log/log.txt', '');
}

module.exports.createLog = createLog;
module.exports.clearLog = clearLog;
