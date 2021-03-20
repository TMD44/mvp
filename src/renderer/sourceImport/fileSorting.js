const path = require('path');
const { getFileTypes } = require('../../main/configuration');


function fileSorting(file, reply) {
    if (getFileTypes().media.includes(path.extname(file))) {
        reply.media.push(objTemplate(file));
    } else if (getFileTypes().sub.includes(path.extname(file))) {
        reply.sub.push(objTemplate(file));
    } else if (getFileTypes().nfo.includes(path.extname(file))) {
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

module.exports.fileSorting = fileSorting;
