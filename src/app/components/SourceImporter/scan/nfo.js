/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import { promises as fsp } from 'fs';
import tinyURL from 'tinyurl';

const nfoPatterns = {
    year: /(DATE|TIME).*/gi,
    title: /(TITLE|TIME).*/gi,
    tinyurl: /(http[s]?:\/\/tinyurl.com).+?(?= |_|-|\.|\n)/gi,
    // IMDB PATTERNS
    imdb_title: /tt[0-9]{7}/gi,
    imdb_name: /nm[0-9]{7}/gi,
    imdb_company: /co[0-9]{7}/gi,
    imdb_list: /li[0-9]{7}/gi,
};

export function nfoFileFinder(media, results) {
    const resultArray = [];

    results.nfo.forEach((nfo) => {
        if (nfo.path.concat(nfo.fn) === media.path.concat(media.fn)) {
            resultArray.push(nfo.full);
        }
    });

    return resultArray[0];
}

async function nfoPatternFinder(data) {
    const result = {};

    const imdbFound = data.match(nfoPatterns.imdb_title);
    if (imdbFound) {
        // eslint-disable-next-line prefer-destructuring
        result.imdb_id = imdbFound[0];
        result.imdb_url = `https://www.imdb.com/title/${imdbFound[0]}`;
    } else {
        const tinyUrlData = {};
        const tinyurlFound = data.match(nfoPatterns.tinyurl);
        if (tinyurlFound) {
            for (const url in tinyurlFound) {
                tinyUrlData[`tinyurl_${url + 1}`] = await tinyURL.resolve(
                    tinyurlFound[url]
                );
            }
        }
        const imdbFoundInTinyUrl = Object.values(tinyUrlData)
            .join('_-_')
            .match(nfoPatterns.imdb_title);
        if (imdbFoundInTinyUrl) {
            // eslint-disable-next-line prefer-destructuring
            result.imdb_id = imdbFoundInTinyUrl[0];
            result.imdb_url = `https://www.imdb.com/title/${imdbFoundInTinyUrl[0]}`;
        }
    }

    return result;
}

export async function nfoIdFinder(nfoPath) {
    // const nfoPath = await nfoFileFinder(media);
    if (nfoPath === undefined) return;

    const nfoContent = await fsp.readFile(String(nfoPath), 'utf8');
    const result = await nfoPatternFinder(nfoContent);
    return result;
}
