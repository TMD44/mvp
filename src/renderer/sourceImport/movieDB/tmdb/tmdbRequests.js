const MovieDB = require('node-themoviedb');
const { tmdb_api_key } = require('../../../../../assets/private/apiKeys');
const { config } = require('../../../../main/configuration');

const mdb = new MovieDB();
mdb.setApiKey(tmdb_api_key);
mdb.setLanguage(config.getScanLanguage());

//tmdb namespace
const tmdb = {

    getExternalIDs: async (id, type = 'movie') => {
        const args = {
            pathParameters: {
                movie_id: id
            },
        };
        try {
            return await mdb.movie.getExternalIDs(args);
        } catch (err) {
            console.log(err.message);
        }
    },

    findByExternalID: async (id, external_source = 'imdb_id') => {
        const args = {
            pathParameters: {
                external_id: id,
            },
            query: {
                external_source: external_source,
            },
        };

        return await mdb.find.byExternalID(args);
    },

    getImages: async (id, language = 'en-US') => {},

    multiSearch: async (query, region = '', adult = false) => {
        const args = {
            query: {
                query: query,
                page: 1,
                region: region,
                include_adult: adult,
            },
        };

        return await mdb.search.multi(args);
    },

    seachForMovies: async (query, year, release_year, region = '', adult = false) => {
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

        return await mdb.search.movies(args);
    },

    searchForTV: async (query, year, adult = false) => {
        const args = {
            query: {
                query: query,
                page: 1,
                first_air_date_year: year,
                include_adult: adult,
            },
        };

        return await mdb.search.TVShows(args);
    },
};

module.exports.tmdb = tmdb;