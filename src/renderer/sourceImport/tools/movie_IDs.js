const fs = require('fs');
const { nfoFinder } = require('./nfo');
const { imdbFinder } = require('../movieDB/imdb/imdb');

function id_finder(media) {
    const nfoPath = nfoFinder(media);
    if (nfoPath == undefined) return;

    return imdbFinder(fs.readFileSync(String(nfoPath), 'utf8'));
}

module.exports.id_finder = id_finder;
