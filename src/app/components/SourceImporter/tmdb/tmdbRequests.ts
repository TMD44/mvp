/* eslint-disable no-return-await */
import MovieDB from 'node-themoviedb';
import { tmdbApiKey } from '@assets/private/apiKeys';

const mdb = new MovieDB(tmdbApiKey);
mdb.setLanguage('en-US'); // hu-HU

type ExternalSource =
    | 'imdb_id'
    | 'freebase_mid'
    | 'freebase_id'
    | 'tvdb_id'
    | 'tvrage_id'
    | 'facebook_id'
    | 'twitter_id'
    | 'instagram_id';

// tmdb namespace
export const tmdbRequest = {
    getExternalIDs: async (id: string, type = 'movie') => {
        const args = {
            pathParameters: {
                movie_id: id,
            },
        };
        // return await mdb.movie.getExternalIDs(args);
        return mdb.movie.getExternalIDs(args);
    },

    findByExternalID: async (
        id: string,
        external_source: ExternalSource = 'imdb_id'
    ) => {
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

    getImages: async (id: string, language = 'en-US') => {},

    multiSearch: async (query: string, region = '', adult = false) => {
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
        query: string,
        year: number,
        release_year: number,
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

    searchForTV: async (query: string, year: number, adult = false) => {
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
