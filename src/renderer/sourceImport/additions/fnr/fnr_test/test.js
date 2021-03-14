const fs = require("fs");
const { fnr } = require("../fnr");
const { torrent_movie_names } = require("./torrent_movies");
const { torrent_series_names } = require("./torrent_series");

/*
FOR RUN THE TEST USE THE test() FUNCTION!
*/

function test(){
    let dataToWrite = [];
    for (let i = 0; i < torrent_movie_names.length; i++) {
        //dataToWrite += JSON.stringify(fnr(torrent_series_names[i]));
        dataToWrite += JSON.stringify(fnr(torrent_movie_names[i]));
    }

    fs.writeFileSync('./exports/test_cleaned_data.json', dataToWrite);
}

module.exports.test = test;