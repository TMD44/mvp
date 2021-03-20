const MovieDB = require('node-themoviedb');
const { tmdb_api_key } = require('../../../../../assets/api/apiKeys');
const { getScanLanguage } = require('./../../../../main/configuration');

const mdb = new MovieDB(tmdb_api_key, getScanLanguage());

//mdb.setLanguage(configJSON.scan_preferences.scan_language);

async function tmdb_multiSearch(query, region = '', adult = false) {
    const args = {
        query: {
            query: query,
            page: 1,
            region: region,
            include_adult: adult,
        },
    };

    return result = await mdb.search.multi(args);

    //console.log('tmdb_multiSearchDATA: ', result.data);

    //return result.data;
}

async function tmdb_seachForMovies(query, year, release_year, region = '', adult = false) {
    const args = {
        query: {
            query: query,
            page: 1,
            year: year,
            primary_release_year: release_year,
            region: region,
            include_adult: adult,
        },
    };

    const result = await mdb.search.movies(args);

    console.log('tmdb_seachForMovies: ', result.data);
}

async function tmdb_seachForTV(query, year, adult = false) {
    const args = {
        query: {
            query: query,
            page: 1,
            first_air_date_year: year,
            include_adult: adult,
        },
    };

    const result = await mdb.search.movies(args);

    console.log('tmdb_seachForMovies: ', result.data);
}

async function tmdb_get_external_IDs(id, type = 'movie') {
    const args = {
        pathParameters: {
            // path parameters for query, i.e. tv_id
        },
        query: {
            // query string, i.e. session_id
            // NOTE: api_key and language will be added to query by default, don't need specify these values
        },
        body: {
            // data for request body
        },
    };
    
    const result = await mdb.movie.getExternalIDs(args);

    console.log('tmdb_get_external_IDs', result.data);
}

async function tmdb_get_images(id, language = 'en-US') {

}

async function tmdb_find_by_external_source(id, external_source = 'imdb_id') {
    const args = {
        pathParameters: {
            external_id: id,
        },
        query: {
            external_source: external_source,
        },
    };

    const result = await mdb.find.byExternalID(args);

    console.log('tmdb_find_by_external_source: ', result.data);
}

module.exports.tmdb_seachForTV = tmdb_seachForTV;
module.exports.tmdb_multiSearch = tmdb_multiSearch;
module.exports.tmdb_seachForMovies = tmdb_seachForMovies;
module.exports.tmdb_find_by_external_source = tmdb_find_by_external_source;
module.exports.tmdb_get_external_IDs = tmdb_get_external_IDs;
