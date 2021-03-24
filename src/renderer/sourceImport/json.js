const fsp = require('fs').promises;
const { fnr } = require('./tools/fnr/fnr');
const { subFinder } = require('./tools/sub');
const { nfoFinder } = require('./tools/nfo');
const { getHashID } = require('./tools/hashID');
const { getDateAndTime } = require('./tools/date');
const { idFinder } = require('./tools/movie_IDs');
const { tmdb } = require('./movieDB/tmdb/tmdbRequests');

async function mediaJSONGenerator(media) {
    let mediaInJSON = {};

    //const hashID = getHashID(media.full);
    mediaInJSON = {
        id: getHashID(media.full),
        media_name: media.fn,
        extension: media.ext,
        path: media.path,
        full_path: media.full,
        subtitles: await subFinder(media),
        nfo: await nfoFinder(media),
        movieDB_id: await idFinder(media),
        /*metadata: {
            editable: true,
            title: "",
            creation_date: "",
            description: "",
            genres: "",
            images: {},
            resolution: "",
        },*/
        unsure_metadata: {
            imdb_data: {},
            filename_data: fnr(media.fn),
            nfo_data: /*idFinder(media, array)*/ {},
        },
    };
    
    return mediaInJSON;
}

async function completeJSONGenerator(mediaInJSON) {
    let completeJSON = {
        generation_time: getDateAndTime(),
        version: '1.0',
        media: mediaInJSON,
        tv_series: {},
        movie_series: {},
        playlists: {},
    };

    return completeJSON;
}

async function printJSONToFile(path, jsonToPrint) {
    //fs.writeFileSync(path, JSON.stringify(jsonToPrint, null, 4));
    await fsp.writeFile(path, JSON.stringify(jsonToPrint, null, 4), 'utf8');
}

module.exports.mediaJSONGenerator = mediaJSONGenerator;
module.exports.completeJSONGenerator = completeJSONGenerator;
module.exports.printJSONToFile = printJSONToFile;
