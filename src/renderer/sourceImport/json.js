const fs = require('fs');
const { fnr } = require('./additions/fnr/fnr');
const { subFinder } = require('./additions/sub');
const { nfor, nfoFinder } = require('./additions/nfo');
const { getHashID } = require('./hashID');
const { getDateAndTime } = require('./date');

function mediaJSONGenerator(media, array) {
    let mediaInJSON = {};

    let hashID = getHashID(media.fn);
    //mediaInJSON[hashID] = {
    mediaInJSON = {
        id: hashID,
        mediaName: media.fn,
        extension: media.ext,
        path: media.path,
        fullPath: media.full,
        subtitles: subFinder(media, array),
        nfoPath: nfoFinder(media, array),
        imdb: nfor(media, array),
        recognizedFromTitle: fnr(media.fn),
    };

    return mediaInJSON;
}

function completeJSONGenerator(mediaInJSON) {
    let completeJSON = {
        generation_time: getDateAndTime(),
        version: '1.0',
        media: mediaInJSON,
    };

    return completeJSON;
}

function printJSONToFile(path, jsonToPrint) {
    fs.writeFileSync(path, JSON.stringify(jsonToPrint, null, 4));
}

module.exports.mediaJSONGenerator = mediaJSONGenerator;
module.exports.completeJSONGenerator = completeJSONGenerator;
module.exports.printJSONToFile = printJSONToFile;
