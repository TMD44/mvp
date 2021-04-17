import { promises as fsp } from 'fs';
import tinyURL from 'tinyurl';

const nfo_patterns = {
    year: /(DATE|TIME).*/gi,
    title: /(TITLE|TIME).*/gi,
    tinyurl: /(http[s]?:\/\/tinyurl.com).+?(?=\ |\_|\-|\.|\n)/gi,
    //IMDB PATTERNS
    imdb_title: /tt[0-9]{7}/gi,
    imdb_name: /nm[0-9]{7}/gi,
    imdb_company: /co[0-9]{7}/gi,
    imdb_list: /li[0-9]{7}/gi,
};

export async function nfoFileFinder(media, results) {
    let resultArray = [];

    results.nfo.forEach(nfo => {
        if (nfo.path.concat(nfo.fn) == media.path.concat(media.fn)) {
            resultArray.push(nfo.full);
        }
    });

    return resultArray[0];
}

async function nfoPatternFinder(data) {
    let result = {};

    const imdbFound = data.match(nfo_patterns.imdb_title);
    if (imdbFound) {
        result['imdb_id'] = imdbFound;
        result['imdb_url'] = 'https://www.imdb.com/title/' + imdbFound;
    }

    //TODO: RUNNING IS PRETTY SLOW, FURTHER DEVELOPMENT REQUIRED
    /*const tinyurlFound = data.match(nfo_patterns.tinyurl);
    if (tinyurlFound) {
        for (const url in tinyurlFound) {
            result[`tinyurl_${url}`] = await tinyURL.resolve(tinyurlFound[url]);
        }
    }*/

    return result;
}

export async function nfoIdFinder(nfoPath) {
    //const nfoPath = await nfoFileFinder(media);
    if (nfoPath == undefined) return;

    const nfoContent = await fsp.readFile(String(nfoPath), 'utf8');
    return nfoPatternFinder(nfoContent);
}
