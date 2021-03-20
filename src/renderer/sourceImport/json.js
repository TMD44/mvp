const fs = require('fs');
const { fnr } = require('./tools/fnr/fnr');
const { subFinder } = require('./tools/sub');
const { nfoFinder } = require('./tools/nfo');
const { getHashID } = require('./tools/hashID');
const { getDateAndTime } = require('./tools/date');
const { id_finder } = require('./tools/movie_IDs');
const { tmdb_multiSearch } = require('./movieDB/tmdb/tmdb');

function mediaJSONGenerator(media) {
    let mediaInJSON = {};

    const hashID = getHashID(media.full);
    //mediaInJSON[hashID] = {
    mediaInJSON = {
        id: hashID,
        media_name: media.fn,
        extension: media.ext,
        path: media.path,
        full_path: media.full,
        subtitles: subFinder(media),
        nfo: nfoFinder(media),
        movieDB_id: id_finder(media),
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
            nfo_data: /*id_finder(media, array)*/{},
        },
    };

    /*tmdb_multiSearch(mediaInJSON.unsure_metadata.filename_data.title).then(result => {
        mediaInJSON.unsure_metadata["tmdb_data"] = result.data.results;
    });
    console.log('mediaInJSON: ', mediaInJSON);*/

    return mediaInJSON;
}

function completeJSONGenerator(mediaInJSON) {
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

function printJSONToFile(path, jsonToPrint) {
    fs.writeFileSync(path, JSON.stringify(jsonToPrint, null, 4));
}

module.exports.mediaJSONGenerator = mediaJSONGenerator;
module.exports.completeJSONGenerator = completeJSONGenerator;
module.exports.printJSONToFile = printJSONToFile;
