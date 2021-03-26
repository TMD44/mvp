const fs = require('fs');
const { torrent_movie_names } = require('./test_data/torrent_movies');
const { torrent_series_names } = require('./test_data/torrent_series');

function mediaMaker(path) {
    const baseDir = path;
    const ext = ['.mkv', '.mkv', '.mkv', '.avi', '.mp4'];
    const sub = ['.srt', '.srt', '.srt', '.vtt', '.ass', '.sub'];
    const numbers = [1, 1, 2, 2, 3];

    if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);
    
    //MOVIES
    for (let i = 0; i < torrent_movie_names.length; i++) {
        if (!fs.existsSync(baseDir + '\\' + torrent_movie_names[i])) {
            fs.mkdirSync(baseDir + '\\' + torrent_movie_names[i]);
            //MEDIA only 1
            fs.writeFileSync(
                baseDir + '\\' + torrent_movie_names[i] + '\\' + torrent_movie_names[i] + ext[Math.floor(Math.random() * ext.length)],
                torrent_movie_names[i],
                'utf8'
            );
            //MEDIA SAMPLE only 1
            fs.mkdirSync(baseDir + '\\' + torrent_movie_names[i] + '\\' + 'SAMPLE');
            fs.writeFileSync(
                baseDir +
                    '\\' +
                    torrent_movie_names[i] +
                    '\\' +
                    'SAMPLE' +
                    '\\' +
                    torrent_movie_names[i] +
                    '-SAMPLE-' +
                    ext[Math.floor(Math.random() * ext.length)],
                torrent_movie_names[i],
                'utf8'
            );
            //SUB 1,2 OR 3
            for (let j = 0; j < numbers[Math.floor(Math.random() * numbers.length)]; j++) {
                fs.writeFileSync(
                    baseDir + '\\' + torrent_movie_names[i] + '\\' + torrent_movie_names[i] + sub[Math.floor(Math.random() * sub.length)],
                    torrent_movie_names[i],
                    'utf8'
                );
            }
            //NFO only 1
            fs.writeFileSync(baseDir + '\\' + torrent_movie_names[i] + '\\' + torrent_movie_names[i] + '.nfo', nfoContent(), 'utf8');
        }
        console.log('MOVIE: ', torrent_movie_names[i]);
    }

    //TV SERIES
    for (let i = 0; i < torrent_series_names.length; i++) {
        if (!fs.existsSync(baseDir + '\\' + torrent_series_names[i])) {
            fs.mkdirSync(baseDir + '\\' + torrent_series_names[i]);
            //MEDIA only 1
            fs.writeFileSync(
                baseDir + '\\' + torrent_series_names[i] + '\\' + torrent_series_names[i] + ext[Math.floor(Math.random() * ext.length)],
                torrent_series_names[i],
                'utf8'
            );
            //MEDIA SAMPLE only 1
            fs.mkdirSync(baseDir + '\\' + torrent_series_names[i] + '\\' + 'SAMPLE');
            fs.writeFileSync(
                baseDir +
                    '\\' +
                    torrent_series_names[i] +
                    '\\' +
                    'SAMPLE' +
                    '\\' +
                    torrent_series_names[i] +
                    '-SAMPLE-' +
                    ext[Math.floor(Math.random() * ext.length)],
                torrent_series_names[i],
                'utf8'
            );
            //SUB 1,2 OR 3
            for (let j = 0; j < numbers[Math.floor(Math.random() * numbers.length)]; j++) {
                fs.writeFileSync(
                    baseDir + '\\' + torrent_series_names[i] + '\\' + torrent_series_names[i] + sub[Math.floor(Math.random() * sub.length)],
                    torrent_series_names[i],
                    'utf8'
                );
            }
            //NFO only 1
            fs.writeFileSync(baseDir + '\\' + torrent_series_names[i] + '\\' + torrent_series_names[i] + '.nfo', nfoContent(), 'utf8');
        }
        console.log("TV: ",torrent_series_names[i]);
    }

    console.log('TEST FILE GENERATION DONE!');
}

function nfoContent() {
    let result = '';

    result += 'https://www.imdb.com/title/tt0' + (Math.floor(Math.random() * 900000) + 100000) + '\n';

    let r = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < r; i++) {
        result += '\n https://tinyurl.com/kfptudpp \n';
    }

    return result;
}

module.exports.mediaMaker = mediaMaker;
