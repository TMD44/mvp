/* eslint-disable global-require */
/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import { ScanResultsType, ScanResultType } from '@type/ConfigType';
import { MetadataType } from '@type/MediaType';
import { promises as fsp } from 'fs';

const nfoPatterns = {
    year: /(DATE|TIME).*/gi,
    title: /(TITLE|TIME).*/gi,
    tinyurl: /(http[s]?:\/\/tinyurl.com).+?(?= |_|-|\.|\n)/gi,
    // IMDB PATTERNS
    imdb_title: /tt[0-9]{7,8}/gi,
    imdb_name: /nm[0-9]{7,8}/gi,
    imdb_company: /co[0-9]{7,8}/gi,
    imdb_list: /li[0-9]{7,8}/gi,
};

export const nfoFileFinder = (
    media: ScanResultType,
    results: ScanResultsType
) => {
    const resultArray: string[] = [];

    results.nfo.forEach((nfo) => {
        if (nfo.path.concat(nfo.fn) === media.path.concat(media.fn)) {
            resultArray.push(nfo.full);
        }
        const mediaPathArray = media.path.split('\\');
        mediaPathArray.pop();
        if (nfo.path === mediaPathArray.join('\\')) {
            resultArray.push(nfo.full);
        }
        if (nfo.fn === media.path.split('\\').pop()) {
            resultArray.push(nfo.full);
        }
        if (nfo.path === media.path) {
            resultArray.push(nfo.full);
        }
    });
    return resultArray[0];
};

const nfoPatternFinder = async (data: string) => {
    const result = {} as MetadataType;

    const imdbFound = data.match(nfoPatterns.imdb_title);
    if (imdbFound) {
        result.imdb_id = imdbFound[0];
        result.imdb_url = `https://www.imdb.com/title/${imdbFound[0]}`;
    } else {
        const tinyUrlData: { [s: string]: unknown } | ArrayLike<unknown> = {};
        const tinyurlFound = data.match(nfoPatterns.tinyurl);
        if (tinyurlFound) {
            for (const url in tinyurlFound) {
                tinyUrlData[
                    `tinyurl_${url + 1}`
                ] = await require('tinyurl').resolve(tinyurlFound[url]);
            }
        }
        const imdbFoundInTinyUrl = Object.values(tinyUrlData)
            .join('_-_')
            .match(nfoPatterns.imdb_title);
        if (imdbFoundInTinyUrl) {
            result.imdb_id = imdbFoundInTinyUrl[0];
            result.imdb_url = `https://www.imdb.com/title/${imdbFoundInTinyUrl[0]}`;
        }
    }

    return result;
};

export const nfoIdFinder = async (nfoPath: string) => {
    // const nfoPath = await nfoFileFinder(media);
    if (nfoPath === undefined) return;

    const nfoContent = await fsp.readFile(nfoPath, 'utf8');
    const result = await nfoPatternFinder(nfoContent);
    return result;
};
