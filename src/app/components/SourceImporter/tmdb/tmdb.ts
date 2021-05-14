/* eslint-disable prefer-destructuring */
import { addToMedia } from '@redux/actions/mediaActions';
import store from '@redux/store';
import { AllMediaDataType, MetadataType } from '@type/MediaType';
import { IncomingHttpHeaders } from 'http';
import MovieDB from 'node-themoviedb';
import { imdbIdExists, yearExists, remodelData } from './dataSelection';
import { tmdbRequest } from './tmdbRequests';

const tmdbDataCleaning = (
    obj: {
        data:
            | MovieDB.Responses.Find.ByExternalID
            | MovieDB.Responses.Search.Movies
            | MovieDB.Responses.Search.TVShows;
        headers: IncomingHttpHeaders;
    },
    type: 'imdb' | 'movie' | 'series'
) => {
    let result;
    Object.entries(obj.data).forEach(([key, arr]) => {
        if (arr.length > 0) {
            if (type === 'imdb') {
                switch (key) {
                    case 'movie_results':
                        result = arr[0];
                        result.media_type = 'movie';
                        break;

                    case 'tv_results':
                    case 'tv_season_results':
                    case 'tv_episode_results':
                        result = arr[0];
                        result.media_type = 'series';
                        break;

                    default:
                        result = arr[0];
                        result.media_type = 'UNKNOWN';
                        break;
                }
            }
            if (type === 'movie') {
                result = arr[0];
                result.media_type = 'movie';
            }
            if (type === 'series') {
                result = arr[0];
                result.media_type = 'series';
            }
        }
    });
    let finalResult;
    if (result) {
        finalResult = remodelData(result);
    }
    return finalResult;
};

export const getTMDBdata = async (obj: AllMediaDataType) => {
    try {
        if (imdbIdExists(obj)) {
            const data = await tmdbRequest.findByExternalID(
                obj.metadata.imdb_id as string,
                'imdb_id'
            );
            store.dispatch(
                addToMedia(
                    obj.id,
                    tmdbDataCleaning(data, 'imdb') as MetadataType
                )
            );
        } else if (yearExists(obj)) {
            if (obj.metadata.media_type === 'movie') {
                const data = await tmdbRequest.seachForMovies(
                    obj.metadata.title,
                    obj.metadata.release_date as number
                );
                store.dispatch(
                    addToMedia(
                        obj.id,
                        tmdbDataCleaning(data, 'movie') as MetadataType
                    )
                );
            } else if (obj.metadata.media_type === 'series') {
                const data = await tmdbRequest.searchForTV(
                    obj.metadata.title,
                    obj.metadata.release_date as number
                );
                store.dispatch(
                    addToMedia(
                        obj.id,
                        tmdbDataCleaning(data, 'series') as MetadataType
                    )
                );
            }
        }
    } catch (error) {
        console.error('Error from TMDB: ', error);
    }
};
