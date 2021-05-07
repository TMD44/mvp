let tempFileName = '';
let numberOfFoundAttributes = 0;

const fnrPatterns = {
    resolution: /[0-9]{3,4}[PI]{1}|[0-9]{3,4}[.\-_ ]?[X][.\-_ ]?[0-9]{3,4}/gi, // 720p, 1080p, 1920x1080, 1920X1080, 1920_x-1080, 1920.X 1080,
    year: /((?:19[3-9]|20[0123])[0-9])/g, // 1901, 1938, 1987, 2000, 2010, 2020, 2030, !!! above 2039 NO !!!     /[\[\(]?((?:19[0-9]|20[0123])[0-9])[\]\)]?/g
    languages: /[.\-_ ](ENG|HUN|GER|JAP)[^a-zA-z]/gi, // |FRE|RUS|ITA|SPA|POL ...
    quality: /(HD|BD|BR|DS|TV|CAM|WEB|DVD|VHS|FULL|WEB[._\- ]?DL)[._\- ]?RIP|(HD|BD|BR|DS|TV|CAM|WEB|DVD|FULL)[._\- ]?DL|(HD|BD|BR|DS|TV|CAM|WEB|DVD|FULL)[._\- ]?TS|(HD|BD|BR|DS|TV|CAM|WEB|DVD|FULL)[._\- ]?TV|BLU[.\- ]?RAY[.\-_ ]?(REMUX)?|[._\- ]UHD[._\- ]|HDTS|OPEN[._\- ]?MATTE|H[._\- ]?MAX|(DVD)?SCR|DVD[._\- ]?[R9]/gi,
    bluray: /BD[0-9]{2}|BD100/gi,
    season: /[.,\-_ ]S([0-9]{1,2})-(S)?([0-9]{1,2})|[.,\-_ ]S([0-9]{1,2})|[^0-9]([0-9]{1,2})X/gi, // S05E03, s9e4, 1x09, 08X19
    episode: /[.,\-_ ]E([0-9]{1,3})-(E)?([0-9]{1,3})|E([0-9]{1,3})(?:[^0-9]|$)|[Xx]([0-9]{1,3})(?:[^0-9]|$)|(EP|EPISODE)([0-9]{1,3})(?:[^0-9]|$)/gi,
    extended: /EXTENDED[._\- ]?(CUT)?/gi,
    directors: /DIRECTORS[._\- ]?(CUT)?/gi,
    hdr: /[.\-_ ](HDR)[.\-_ ]/gi,
    codec: /XVID|DIVX|AVC|HEVC|X[.\-_ ]?26[0-9]|H[.\-_ ]?26[0-9]/gi,
    audio: /(DD|DDP|MA|AC3|AAC|PCM|LPCM|FLAC|DTS[._\- ]?(HD)?|TRUEHD[+._\- ]?ATMOS|TRUEHD|ATMOS)[+._\- ]?[0-9]\.?[0-9]|DTS[._\- ]?(HD|ES)?|DUAL[._\- ]?AUDIO|DOLBY[+._\- ]?(DIGITAL[+._\- ]?(PLUS)?|VISION|ATMOS)|HALF-OU/gi,
    threeDimension: /[.,\-_ ]3D[.,\-_ \n]/gi,
    widescreen: /[.,\-_ ]WS[.,\-_ \n]/gi,
    filetype: /[.,\-_ ]MKV[.,\-_ \n]|[.,\-_ ]AVI[.,\-_ \n]|[.,\-_ ]MP4[.,\-_ \n]/gi,
    group: /(- ?([^-]+(?:-={[^-]+-?$)?))$/g,
    imdb_title: /tt[0-9]{7,8}/gi,
    others: /[.,\-_ ](AMZN|REPACK|RETAIL|REMUX|CUSTOM[._\- ]?(PAL)?|UNRATED|PROPER|COMPLETE|INTERNAL|READ[._\- ]?NFO|R[0-9])[.,\-_ ]/gi,
    brackets: /\[(.*?)\]|\((.*?)\)|\{(.*?)\}|<(.*?)>/g, // this has to be the last before the name
};

function deleteFromFileName(from, what) {
    numberOfFoundAttributes++;
    return String(from).replace(String(what), '_');
}

function removeNoise(str) {
    return str.replace(/^[.,\-_ ]|[.,\-_ ]$/g, '');
}

function process(
    JSON_cleaned_obj,
    itemFound,
    pattern,
    JSON_item_name,
    toWhat,
    printToJSON = true,
    toUpperCase = false
) {
    // eslint-disable-next-line no-param-reassign
    itemFound = tempFileName.match(pattern);
    if (itemFound != null) {
        if (toWhat === 'toString') {
            // TODO: if more than [0] and [1] element there is
            if (
                itemFound.length === 1 ||
                itemFound[0].toUpperCase() === itemFound[1].toUpperCase()
            ) {
                if (printToJSON)
                    JSON_cleaned_obj[JSON_item_name] = toUpperCase
                        ? removeNoise(
                              itemFound[itemFound.length - 1]
                          ).toUpperCase()
                        : removeNoise(itemFound[itemFound.length - 1]);
                tempFileName = deleteFromFileName(tempFileName, itemFound);
            } else {
                const resultStringArray = [];
                let ind = 0;
                for (let k = 0; k < itemFound.length; ++k) {
                    resultStringArray[ind++] = toUpperCase
                        ? removeNoise(String(itemFound[k])).toUpperCase()
                        : removeNoise(String(itemFound[k]));
                    if (printToJSON)
                        JSON_cleaned_obj[JSON_item_name] = resultStringArray;
                    tempFileName = deleteFromFileName(
                        tempFileName,
                        itemFound[k]
                    );
                }
            }
        } else if (toWhat === 'toInt') {
            const intArray = String(itemFound).trim().split('-');
            const startNum = parseInt(String(intArray[0]).match(/\d+/), 10);
            const endNum = parseInt(
                String(intArray[intArray.length - 1]).match(/\d+/),
                10
            );
            if (
                intArray.length === 1 ||
                intArray[0].toUpperCase() === intArray[1].toUpperCase()
            ) {
                if (printToJSON)
                    JSON_cleaned_obj[JSON_item_name] = parseInt(
                        String(itemFound).match(/\d+/),
                        10
                    );
                tempFileName = deleteFromFileName(tempFileName, itemFound);
            } else {
                const resultIntArray = [];
                let ind = 0;
                for (let k = startNum; k < endNum + 1; ++k) {
                    resultIntArray[ind++] = k;
                }
                if (printToJSON)
                    JSON_cleaned_obj[JSON_item_name] = resultIntArray;
                tempFileName = deleteFromFileName(tempFileName, itemFound);
            }
        } else if (toWhat === 'toBool') {
            if (printToJSON) JSON_cleaned_obj[JSON_item_name] = true;
            tempFileName = deleteFromFileName(tempFileName, itemFound);
        }
    }
}

export function fnr(paramFileName) {
    const cleanedDataJSON = {};
    tempFileName = paramFileName;
    let foundPattern;
    let titleFound;
    let episodeFound;
    let seasonFound;

    try {
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.languages,
            'languages',
            'toString',
            true,
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.resolution,
            'resolution',
            'toString',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.year,
            'release_date',
            'toInt',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.codec,
            'codec',
            'toString',
            true,
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.audio,
            'audio',
            'toString',
            true,
            true
        );
        process(
            cleanedDataJSON,
            seasonFound,
            fnrPatterns.season,
            'season',
            'toInt',
            true
        );
        process(
            cleanedDataJSON,
            episodeFound,
            fnrPatterns.episode,
            'episode',
            'toInt',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.quality,
            'quality',
            'toString',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.bluray,
            'bluray',
            'toString',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.imdb_title,
            'imdb_id',
            'toString',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.extended,
            'extended_cut',
            'toBool',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.directors,
            'directors_cut',
            'toBool',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.hdr,
            'hdr',
            'toBool',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.widescreen,
            'widescreen',
            'toBool',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.threeDimension,
            '3D',
            'toBool',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.filetype,
            'file_type',
            'toString',
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.others,
            'others',
            'toString',
            false,
            true
        );
        process(
            cleanedDataJSON,
            foundPattern,
            fnrPatterns.brackets,
            'brackets',
            'toString',
            false
        );
        // if (numberOfFoundAttributes >= 2) process(cleanedDataJSON, foundPattern, fnrPatterns.group, "group", "toString", false);

        if ('episode' in cleanedDataJSON || 'season' in cleanedDataJSON) {
            cleanedDataJSON.media_type = 'series';
        } else {
            cleanedDataJSON.media_type = 'movie';
        }

        // RAW DATA
        // eslint-disable-next-line no-underscore-dangle
        // cleanedDataJSON._RAW_ = paramFileName;

        // tempFileName BEFORE TITLE RECOGNITION
        // cleanedDataJSON.CLEAN = tempFileName;

        // NUMBER OF KEYS
        // cleanedDataJSON["NUMBER_OF_KEYS"] = numberOfFoundAttributes+1;
    } catch (err) {
        console.log(
            'Error was found at recognition: ',
            err.name,
            ',',
            err.message,
            '| tempFileName: ',
            tempFileName
        );
    }

    try {
        let replaced2;
        if (tempFileName != null) {
            if (numberOfFoundAttributes < 2) {
                const replaced = tempFileName.replace(/([. _]){1,2}/g, ' ');
                cleanedDataJSON.title = removeNoise(
                    replaced.charAt(0).toUpperCase() + replaced.slice(1)
                );
            } else {
                numberOfFoundAttributes++;
                // Removes non alphabetical caracters before title. For example: " __ . -Title.2021"
                tempFileName = tempFileName.substring(
                    tempFileName.indexOf(
                        tempFileName.match(/[a-zA-Z0-9]/).pop()
                    )
                );
                titleFound = tempFileName.substr(
                    0,
                    tempFileName.indexOf(tempFileName.match(/([. _/]){2,}/g)[0])
                );
                replaced2 = titleFound.replace(/([. _]){1,2}/g, ' ');
                cleanedDataJSON.title = removeNoise(
                    replaced2.charAt(0).toUpperCase() + replaced2.slice(1)
                );
            }
        }
    } catch (err) {
        console.log(
            'Error was found at Title recognition: ',
            err.name,
            ',',
            err.message,
            '| tempFileName: ',
            tempFileName
        );
    }

    if (!cleanedDataJSON.title) {
        cleanedDataJSON.title = paramFileName;
    }

    numberOfFoundAttributes = 0;

    return cleanedDataJSON;
}
