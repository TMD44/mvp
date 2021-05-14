import { getHashID } from '@scripts/hashID';
import { ScanResultsType, ScanResultType } from '@type/ConfigType';
import { AllMediaDataType, MetadataType } from '@type/MediaType';
import { fnr } from './fnr';
import { subFinder } from './sub';
import { nfoFileFinder, nfoIdFinder } from './nfo';
import { dataSum } from './dataSumming';

export const mediaJSONGenerator = async (
    media: ScanResultType,
    scanResults: ScanResultsType
) => {
    let mediaInJSON = {} as AllMediaDataType;

    const subFiles = subFinder(media, scanResults);
    const nfoFile = nfoFileFinder(media, scanResults);
    const movieIds = await nfoIdFinder(nfoFile);

    const fileNameData = fnr(media.fn);
    const folderNameData = fnr(/[^\\]*$/.exec(media.path)[0]);

    const METADATA: MetadataType = dataSum(fileNameData, folderNameData);

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
        /* unsure_metadata: {
            filename_data: fileNameData,
            folder_data: folderNameData,
        }, */
        metadata: METADATA,
    };

    return mediaInJSON;
};
