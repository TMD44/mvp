import { promises as fsp } from 'fs';
import { getExportPath } from '@scripts/getPaths';
import { getHashID } from '@scripts/hashID';
import { fnr } from './fnr';
import { subFinder } from './sub';
import { nfoFileFinder, nfoIdFinder } from './nfo';

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
        /* metadata: {
            editable: true,
            title: "",
            creation_date: "",
            description: "",
            genres: "",
            images: {},
            resolution: "",
        }, */
        unsure_metadata: {
            folder_data: fnr(/[^\\]*$/.exec(media.path)[0]),
            filename_data: fnr(media.fn),
            nfo_data: /* idFinder(media, array) */ {},
        },
    };

    /* const result = await getVideoInfo(media.full);
    console.log(result);
    mediaInJSON.ffprobe = result; */

    return mediaInJSON;
}
