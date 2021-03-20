const MovieDB = require('node-themoviedb');
const { tmdb_api_key } = require('../../../../../assets/api/apiKeys');
//const { getScanLanguage } = require('../../../configuration');

//const mdb = new MovieDB(tmdb_api_key, getScanLanguage());

//mdb.setLanguage(configJSON.scan_preferences.scan_language);

async function tmdb(media) {
    const args = {
        pathParameters: {
            // path parameters for query, i.e. tv_id
            movie_id: '',
            tv_id: '',
        },
        query: {
            // query string, i.e. session_id
            // NOTE: api_key and language will be added to query by default, don't need specify these values
            external_source: external_source,
        },
        body: {
            // data for request body
        },
    };

    if (movie.movieDB_id != undefined) {
        if (movie.movieDB_id.imdb_id != undefined) {
            args.pathParameters.movie_id = movie.movieDB_id.imdb_id;
        }
    }
}

async function tmdb_multiSearch(id, lang = 'en-US', external_source = 'imdb_id') {
    const args = {
        query: {
            external_source: external_source,
            query: '',
            page: 1,
            include_adult: false,
            region: '',
        },
    };

    const result = await mdb.search.multi(args);

    console.log('tmdb_find_by_external_source: ', m.data);
}

async function tmdb_seachForMovies(id, lang = 'en-US', external_source = 'imdb_id') {
    const args = {
        query: {
            external_source: external_source,
            query: '',
            page: 1,
            include_adult: false,
            region: '',
            year: '',
            primary_release_year: "",
        },
    };

    const result = await mdb.find.byExternalID(args);

    console.log('tmdb_find_by_external_source: ', m.data);
}

async function tmdb_get_external_IDs(id, language = 'en-US', type = 'movie') {
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
    
    const m = await mdb.movie.getExternalIDs(args);

    console.log('tmdb_get_external_IDs', m.data);
    /*
    let movie_url = 'https://api.themoviedb.org/3/movie/' + id + '/external_ids?api_key=' + tmdb_api_key;
    let tv_url = 'https://api.themoviedb.org/3/tv/tt8111088/external_ids?api_key=' + tmdb_api_key + '&language=' + language.match(/([a-z]{2})-([A-Z]{2})/g) ? language : 'en-US';

    fetch(type == 'movie' ? movie_url : tv_url)
        .then(response => response.json())
        .then(data => {
            let result = {};
            Object.entries(data).forEach(source => {
                if (source[1] != null) {
                    let key = source[0] == 'id' ? 'tmdb_id' : source[0];
                    result[key] = String(source[1]);
                }
            });
            console.log('tmdb_get_external_IDs: ', result);
            //return result;
        });*/
}

async function tmdb_get_images(id, language = 'en-US') {
    let url = 'https://api.themoviedb.org/3/movie/' + id + '/images?api_key=' + tmdb_api_key + '&language=en-US';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('tmdb_get_images: ', data);
            //return data;
        });
}

async function tmdb_find_by_external_source(id, lang = 'en-US', external_source = 'imdb_id') {
    const args = {
        pathParameters: {
            external_id: id,
        },
        query: {
            external_source: external_source,
        },
    };

    const m = await mdb.find.byExternalID(args);

    console.log('tmdb_find_by_external_source: ', m.data);
    /*
    let url = 'https://api.themoviedb.org/3/find/' + id + '?api_key=' + tmdb_api_key + '&language=' + language + '&external_source=' + external_source;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('tmdb_find_by_external_source: ', data);
            //return data;
        });*/
}

module.exports.tmdb_get_images = tmdb_get_images;
module.exports.tmdb_find_by_external_source = tmdb_find_by_external_source;
module.exports.tmdb_get_external_IDs = tmdb_get_external_IDs;
