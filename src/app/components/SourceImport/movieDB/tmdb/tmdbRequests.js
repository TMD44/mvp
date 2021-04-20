/* eslint-disable no-return-await */
import MovieDB from 'node-themoviedb';
import { tmdbApiKey } from '@assets/private/apiKeys';
import { config } from '@main/configuration';

const mdb = new MovieDB();
mdb.setApiKey(tmdbApiKey);
mdb.setLanguage(config.getScanLanguage());

// tmdb namespace
export const tmdb = {
    getExternalIDs: async (id, type = 'movie') => {
        const args = {
            pathParameters: {
                movie_id: id,
            },
        };
        // return await mdb.movie.getExternalIDs(args);
        return mdb.movie.getExternalIDs(args);
    },

    findByExternalID: async (id, external_source = 'imdb_id') => {
        const args = {
            pathParameters: {
                external_id: id,
            },
            query: {
                external_source,
            },
        };
        // return await mdb.find.byExternalID(args);
        return mdb.find.byExternalID(args);
    },

    getImages: async (id, language = 'en-US') => {},

    multiSearch: async (query, region = '', adult = false) => {
        const args = {
            query: {
                query,
                page: 1,
                region,
                include_adult: adult,
            },
        };
        // return await mdb.search.multi(args);
        return mdb.search.multi(args);
    },

    seachForMovies: async (
        query,
        year,
        release_year,
        region = '',
        adult = false
    ) => {
        const args = {
            query: {
                query,
                page: 1,
                year,
                primary_release_year: release_year,
                region,
                include_adult: adult,
            },
        };
        // return await mdb.search.movies(args);
        return mdb.search.movies(args);
    },

    searchForTV: async (query, year, adult = false) => {
        const args = {
            query: {
                query,
                page: 1,
                first_air_date_year: year,
                include_adult: adult,
            },
        };
        // return await mdb.search.TVShows(args);
        return mdb.search.TVShows(args);
    },
};
