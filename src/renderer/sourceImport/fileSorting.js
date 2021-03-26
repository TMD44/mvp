const path = require('path');

async function fileSorting(file, media, sub, nfo, reply) {
    if (media.includes(path.extname(file))) {
        reply.media.push(objTemplate(file));
    } else if (sub.includes(path.extname(file))) {
        reply.sub.push(objTemplate(file));
    } else if (nfo.includes(path.extname(file))) {
        reply.nfo.push(objTemplate(file));
    }
}

function objTemplate(file) {
    return {
        fn: file.substring(file.lastIndexOf('\\') + 1, file.lastIndexOf('.')),
        ext: path.extname(file),
        path: file.substring(0, file.lastIndexOf('\\')),
        full: file,
    };
}

function excludedFromScan(file) {
    const regex = /SAMPLE/gi;
    return regex.test(file);
}

module.exports.fileSorting = fileSorting;
module.exports.excludedFromScan = excludedFromScan;
