import { promises as fsp } from 'fs';
import { fnr } from './tools/fnr';
import { subFinder } from './tools/sub';
import { nfoFileFinder, nfoIdFinder } from './tools/nfo';
import { getHashID } from './tools/hashID';
import { getDateAndTime } from './tools/date';
import { tmdb } from './movieDB/tmdb/tmdbRequests';

import { getVideoInfo } from './tools/videoInfo';

export async function mediaJSONGenerator(media, scanResults) {
    let mediaInJSON = {};

    const subFiles = await subFinder(media, scanResults);
    const nfoFile = await nfoFileFinder(media, scanResults);
    const movieIds = await nfoIdFinder(nfoFile);

    mediaInJSON = {
        id: getHashID(media.full),
        media_name: media.fn,
        extension: media.ext,
        path: media.path,
        full_path: media.full,
        subtitles: subFiles,
        nfo: nfoFile,
        movieDB_id: movieIds,
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
            folder_data: fnr(/[^\\]*$/.exec(media.path)[0]),
            filename_data: fnr(media.fn),
            nfo_data: /*idFinder(media, array)*/ {},
        },
    };

    let result = await getVideoInfo(media.full);
    console.log(result);
    mediaInJSON['ffprobe'] = result;

    return mediaInJSON;
}

export async function completeJSONGenerator(mediaInJSON) {
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

export async function printJSONToFile(path, jsonToPrint) {
    fsp.writeFile(path, JSON.stringify(jsonToPrint, null, 4), 'utf8');
}
