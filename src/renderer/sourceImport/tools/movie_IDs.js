const fsp = require('fs').promises;
const { nfoFinder } = require('./nfo');
const { imdbFinder } = require('../movieDB/imdb/imdb');
const { tmdb } = require('../movieDB/tmdb/tmdbRequests');

async function idFinder(media) {
    const nfoPath = await nfoFinder(media);
    if (nfoPath == undefined) return;

    const nfoContent = await fsp.readFile(String(nfoPath), 'utf8');
    return imdbFinder(nfoContent);
}

module.exports.idFinder = idFinder;
