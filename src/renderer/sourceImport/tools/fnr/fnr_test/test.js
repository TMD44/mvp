const fs = require('fs');
const { fnr } = require('../fnr');
const { torrent_movie_names } = require('./torrent_movies');
const { torrent_series_names } = require('./torrent_series');

/*
FOR RUN THE TEST USE THE test() FUNCTION!
*/

function test() {
    let dataToWrite = [];
    for (let i = 0; i < torrent_series_names.length; i++) {
        //for (let i = 0; i < torrent_movie_names.length; i++) {
        dataToWrite += JSON.stringify(fnr(torrent_series_names[i]));
        //dataToWrite += JSON.stringify(fnr(torrent_movie_names[i]));
    }

    fs.writeFileSync('./exports/test_cleaned_data.json', dataToWrite);
}

function mediaMaker() {
    const baseDir = 'C:\\Users\\tmd-pc\\Pictures\\FOR_TESTING_4';
    const ext = ['.mkv', '.mkv', '.mkv', '.avi', '.mp4'];
    const sub = ['.srt', '.srt', '.srt', '.vtt', '.ass', '.sub'];
    const numbers = [1, 1, 2, 2, 3];
    for (let i = 0; i < torrent_movie_names.length; i++) {
        //invalidChar = torrent_movie_names[i].match(/(\/|\\|\:|\?|\*|\<|\>|\"|\|){1}/g);
        //const f = torrent_movie_names[i].replace(String(invalidChar), '_');
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
            fs.writeFileSync(
                baseDir + '\\' + torrent_movie_names[i] + '\\' + torrent_movie_names[i] + '.nfo',
                'https://www.imdb.com/title/tt0' + (Math.floor(Math.random() * 900000) + 100000),
                'utf8'
            );
        }
    }
    console.log('DONE');
    //for (let i = 0; i < torrent_series_names.length; i++) {}
}

module.exports.test = test;
module.exports.mediaMaker = mediaMaker;
