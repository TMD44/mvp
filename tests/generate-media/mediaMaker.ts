import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { torrentMovieNames } from './torrent_movies';
import { torrentSeriesNames } from './torrent_series';

function nfoContent() {
    let result = '';

    result += `https://www.imdb.com/title/tt0${
        Math.floor(Math.random() * 900000) + 100000
    }\n`;

    const r = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < r; i++) {
        result += '\n https://tinyurl.com/kfptudpp \n';
    }

    return result;
}

export function mediaMaker(path: string) {
    const baseDir = path;
    const ext = ['.mkv', '.mkv', '.mkv', '.avi', '.mp4'];
    const sub = ['.srt', '.srt', '.srt', '.vtt', '.ass', '.sub'];
    const numbers = [1, 1, 2, 2, 3];

    if (!existsSync(baseDir)) mkdirSync(baseDir);

    // MOVIES
    for (let i = 0; i < torrentMovieNames.length; i++) {
        if (!existsSync(`${baseDir}\\${torrentMovieNames[i]}`)) {
            mkdirSync(`${baseDir}\\${torrentMovieNames[i]}`);
            // MEDIA only 1
            writeFileSync(
                `${baseDir}\\${torrentMovieNames[i]}\\${torrentMovieNames[i]}${
                    ext[Math.floor(Math.random() * ext.length)]
                }`,
                torrentMovieNames[i],
                'utf8'
            );
            // MEDIA SAMPLE only 1
            mkdirSync(`${baseDir}\\${torrentMovieNames[i]}\\SAMPLE`);
            writeFileSync(
                `${baseDir}\\${torrentMovieNames[i]}\\` +
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
                    `${baseDir}\\${torrentMovieNames[i]}\\${
                        torrentMovieNames[i]
                    }${sub[Math.floor(Math.random() * sub.length)]}`,
                    torrentMovieNames[i],
                    'utf8'
                );
            }
            // NFO only 1
            writeFileSync(
                `${baseDir}\\${torrentMovieNames[i]}\\${torrentMovieNames[i]}.nfo`,
                nfoContent(),
                'utf8'
            );
        }
        console.log('MOVIE: ', torrentMovieNames[i]);
    }

    // TV SERIES
    for (let i = 0; i < torrentSeriesNames.length; i++) {
        if (!existsSync(`${baseDir}\\${torrentSeriesNames[i]}`)) {
            mkdirSync(`${baseDir}\\${torrentSeriesNames[i]}`);
            // MEDIA only 1
            writeFileSync(
                `${baseDir}\\${torrentSeriesNames[i]}\\${
                    torrentSeriesNames[i]
                }${ext[Math.floor(Math.random() * ext.length)]}`,
                torrentSeriesNames[i],
                'utf8'
            );
            // MEDIA SAMPLE only 1
            mkdirSync(`${baseDir}\\${torrentSeriesNames[i]}\\SAMPLE`);
            writeFileSync(
                `${baseDir}\\${torrentSeriesNames[i]}\\` +
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
                    `${baseDir}\\${torrentSeriesNames[i]}\\${
                        torrentSeriesNames[i]
                    }${sub[Math.floor(Math.random() * sub.length)]}`,
                    torrentSeriesNames[i],
                    'utf8'
                );
            }
            // NFO only 1
            writeFileSync(
                `${baseDir}\\${torrentSeriesNames[i]}\\${torrentSeriesNames[i]}.nfo`,
                nfoContent(),
                'utf8'
            );
        }
        console.log('TV: ', torrentSeriesNames[i]);
    }

    console.log('TEST FILE GENERATION DONE!');
}
