const MovieDB = require('node-themoviedb');
const { tmdb_api_key } = require('../../../../../resources/api/apiKeys');
const mdb = new MovieDB(tmdb_api_key);

async function fromTMDB(string) {
    const movie1 = await mdb.tv.getDetails(string);
    return String(movie1);
}

async function tmdb_findByImdbID(id) {
    const result = await mdb.find.byExternalID(id);
    return String(result);
}

/*
function fromTMDB(string) {
    let url = "https://api.themoviedb.org/3/search/movie?api_key="+tmdb_api_key+"&language=en-US&query="+string+"&page=1&include_adult=false";

    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log(body); // Print the json response
            fs.writeFileSync("./generated_json/tmdb.json", JSON.stringify(body));
        }
    })
}*/

module.exports.fromTMDB = fromTMDB;
module.exports.tmdb_findByImdbID = tmdb_findByImdbID;
