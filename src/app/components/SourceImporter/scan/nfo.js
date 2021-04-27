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

export async function nfoFileFinder(media, results) {
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
        result.imdb_id = imdbFound;
        result.imdb_url = `https://www.imdb.com/title/${imdbFound}`;
    } else {
        // TODO: RUNNING IS PRETTY SLOW: FURTHER DEVELOPMENT REQUIRED

        // TODO: if TinyURL found, then check for imdb in the resolved data
        const tinyurlFound = data.match(nfoPatterns.tinyurl);
        if (tinyurlFound) {
            for (const url in tinyurlFound) {
                result[`tinyurl_${url + 1}`] = await tinyURL.resolve(
                    tinyurlFound[url]
                );
            }
        }
    }

    return result;
}

export async function nfoIdFinder(nfoPath) {
    // const nfoPath = await nfoFileFinder(media);
    if (nfoPath === undefined) return;

    const nfoContent = await fsp.readFile(String(nfoPath), 'utf8');
    return nfoPatternFinder(nfoContent);
}
