const fs = require('fs');
const { imdbFinder } = require('../movieDB/imdb/imdb');

function nfor(media, array) {
    let nfoPath = nfoFinder(media, array);
    if(nfoPath == undefined) return;

    let fileContent = fs.readFileSync(String(nfoPath), 'utf8');
    return imdbFinder(fileContent);
}

function nfoFinder(media, array) {
    let resultArray = [];

    array.nfo.forEach(nfo => {
        if (nfo.path.concat(nfo.fn) == media.path.concat(media.fn)) {
            resultArray.push(nfo.full);
        }
    });

    return resultArray[0];
}

module.exports.nfor = nfor;
module.exports.nfoFinder = nfoFinder;