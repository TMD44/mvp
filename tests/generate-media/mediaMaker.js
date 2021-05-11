const { existsSync, mkdirSync, writeFileSync } = require('fs');
const { IMDB_ID_LIST } = require('./imdbIdList');
const { torrentMovieNames } = require('./torrent_movies');
const { torrentSeriesNames } = require('./torrent_series');

const TEMP_IMDB_ID_LIST = IMDB_ID_LIST;

const nfoContent = () => {
    let result = '';

    const randomImdbID =
        TEMP_IMDB_ID_LIST[Math.floor(Math.random() * TEMP_IMDB_ID_LIST.length)];

    result += `https://www.imdb.com/title/${randomImdbID}\n`;

    TEMP_IMDB_ID_LIST.splice(randomImdbID, 1);

    const r = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < r; i++) {
        result += '\n https://tinyurl.com/kfptudpp \n';
    }

    return result;
};

const mediaMaker = (path) => {
    const baseDir = path;
    const movieDir = `${path}\\movies`;
    const seriesDir = `${path}\\series`;
    const ext = ['.mkv', '.mkv', '.mkv', '.avi', '.mp4'];
    const sub = ['.srt', '.srt', '.srt', '.vtt', '.ass', '.sub'];
    const numbers = [1, 1, 2, 2, 3];

    if (!existsSync(baseDir)) mkdirSync(baseDir);
    if (!existsSync(movieDir)) mkdirSync(movieDir);
    if (!existsSync(seriesDir)) mkdirSync(seriesDir);

    // MOVIES
    for (let i = 0; i < torrentMovieNames.length; i++) {
        if (!existsSync(`${movieDir}\\${torrentMovieNames[i]}`)) {
            mkdirSync(`${movieDir}\\${torrentMovieNames[i]}`);
            // MEDIA only 1
            writeFileSync(
                `${movieDir}\\${torrentMovieNames[i]}\\${torrentMovieNames[i]}${
                    ext[Math.floor(Math.random() * ext.length)]
                }`,
                torrentMovieNames[i],
                'utf8'
            );
            // MEDIA SAMPLE only 1
            mkdirSync(`${movieDir}\\${torrentMovieNames[i]}\\SAMPLE`);
            writeFileSync(
                `${movieDir}\\${torrentMovieNames[i]}\\` +
                    `SAMPLE` +
                    `\\${torrentMovieNames[i]}-SAMPLE-${
                        ext[Math.floor(Math.random() * ext.length)]
                    }`,
                torrentMovieNames[i],
                'utf8'
            );
            // SUB 1,2 OR 3
            for (
                let j = 0;
                j < numbers[Math.floor(Math.random() * numbers.length)];
                j++
            ) {
                writeFileSync(
                    `${movieDir}\\${torrentMovieNames[i]}\\${
                        torrentMovieNames[i]
                    }${sub[Math.floor(Math.random() * sub.length)]}`,
                    torrentMovieNames[i],
                    'utf8'
                );
            }
            // NFO only 1
            writeFileSync(
                `${movieDir}\\${torrentMovieNames[i]}\\${torrentMovieNames[i]}.nfo`,
                nfoContent(),
                'utf8'
            );
        }
        console.log('MOVIE: ', torrentMovieNames[i]);
    }

    // TV SERIES
    for (let i = 0; i < torrentSeriesNames.length; i++) {
        if (!existsSync(`${seriesDir}\\${torrentSeriesNames[i]}`)) {
            mkdirSync(`${seriesDir}\\${torrentSeriesNames[i]}`);
            // MEDIA only 1
            writeFileSync(
                `${seriesDir}\\${torrentSeriesNames[i]}\\${
                    torrentSeriesNames[i]
                }${ext[Math.floor(Math.random() * ext.length)]}`,
                torrentSeriesNames[i],
                'utf8'
            );
            // MEDIA SAMPLE only 1
            mkdirSync(`${seriesDir}\\${torrentSeriesNames[i]}\\SAMPLE`);
            writeFileSync(
                `${seriesDir}\\${torrentSeriesNames[i]}\\` +
                    `SAMPLE` +
                    `\\${torrentSeriesNames[i]}-SAMPLE-${
                        ext[Math.floor(Math.random() * ext.length)]
                    }`,
                torrentSeriesNames[i],
                'utf8'
            );
            // SUB 1,2 OR 3
            for (
                let j = 0;
                j < numbers[Math.floor(Math.random() * numbers.length)];
                j++
            ) {
                writeFileSync(
                    `${seriesDir}\\${torrentSeriesNames[i]}\\${
                        torrentSeriesNames[i]
                    }${sub[Math.floor(Math.random() * sub.length)]}`,
                    torrentSeriesNames[i],
                    'utf8'
                );
            }
            // NFO only 1
            writeFileSync(
                `${seriesDir}\\${torrentSeriesNames[i]}\\${torrentSeriesNames[i]}.nfo`,
                nfoContent(),
                'utf8'
            );
        }
        console.log('TV: ', torrentSeriesNames[i]);
    }

    console.log('TEST FILE GENERATION DONE!');
};

module.exports.mediaMaker = mediaMaker;
