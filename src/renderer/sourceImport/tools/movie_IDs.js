const fs = require('fs');
const { tmdb_get_external_IDs } = require('../movieDB/tmdb/tmdb');
const { nfoFinder } = require('./nfo');
const { imdbFinder } = require('../movieDB/imdb/imdb');

function id_finder(media, array) {
    const nfoPath = nfoFinder(media, array);
    if (nfoPath == undefined) return;

    return imdbFinder(fs.readFileSync(String(nfoPath), 'utf8'));
}

module.exports.id_finder = id_finder;
