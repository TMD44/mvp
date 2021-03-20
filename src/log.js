const fs = require('fs');
const { getDateAndTime } = require('./renderer/sourceImport/tools/date');

function createLog(error, message = '', file = '', line = '', e) {
    let logger = fs.createWriteStream('./log/log.txt', {
        flags: 'a', // 'a' means appending (old data will be preserved)
    });
    logger.write(
        'DATE: ' +
            getDateAndTime() +
            '\nERROR: ' +
            error +
            ' - MESSAGE: ' +
            message +
            thisLine(e) +
            '\n----------------------------------------------------------------------------------------------------\n'
    );

}

function clearLog() {
    return fs.writeFileSync('./log/log.txt', '');
}

function thisLine(e) {
    //const e = new Error();
    const regex = /\((.*):(\d+):(\d+)\)$/;
    const match = regex.exec(e.stack.split('\n')[2]);
    return '\nFILE: ' + match[1] + ':' + match[2] + ':' + match[3];
}

module.exports.createLog = createLog;
module.exports.clearLog = clearLog;
