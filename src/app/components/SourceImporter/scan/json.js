import { promises as fsp } from 'fs';
import { getExportPath } from '@scripts/getPaths';
import { getHashID } from '@scripts/hashID';
import { fnr } from './fnr';
import { subFinder } from './sub';
import { nfoFileFinder, nfoIdFinder } from './nfo';
import { dataSum } from './dataSumming';

export async function mediaJSONGenerator(media, scanResults) {
    let mediaInJSON = {};

    const subFiles = subFinder(media, scanResults);
    const nfoFile = nfoFileFinder(media, scanResults);
    const movieIds = await nfoIdFinder(nfoFile);

    const fileNameData = fnr(media.fn);
    const folderNameData = fnr(/[^\\]*$/.exec(media.path)[0]);

    const METADATA = dataSum(fileNameData, folderNameData);

    if (movieIds) {
        METADATA.imdb_id = movieIds.imdb_id;
        METADATA.imdb_url = movieIds.imdb_url;
    }

    mediaInJSON = {
        id: getHashID(media.full),
        media_name: media.fn,
        extension: media.ext,
        path: media.path,
        full_path: media.full,
        subtitles: subFiles,
        nfo: nfoFile,
        unsure_metadata: {
            filename_data: fileNameData,
            folder_data: folderNameData,
            nfo_data: {},
        },
        // movieDB_id: movieIds,
        // metadata: {
        //     tmdb_id: 'TESZT', // (id)
        //     adult: 'TESZT',
        //     backdrop_path: 'TESZT',
        //     genres: 'TESZT',  // (genre_ids)
        //     original_language: 'TESZT',
        //     original_title: 'TESZT',
        //     overview: 'TESZT',
        //     poster_path: 'TESZT',
        //     release_date: 'TESZT',
        //     title: 'TESZT',
        //     video: 'TESZT',
        //     vote_average: 'TESZT',
        //     vote_count: 'TESZT',
        //     popularity: 'TESZT',
        //     TESZT: 'TESZT',
        // },
        metadata: METADATA,
    };

    /* const result = await getVideoInfo(media.full);
    console.log(result);
    mediaInJSON.ffprobe = result; */

    return mediaInJSON;
}
