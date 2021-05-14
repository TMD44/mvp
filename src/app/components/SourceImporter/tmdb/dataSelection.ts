import { AllMediaDataType } from '@type/MediaType';
import { genresConvert } from './genresConvert';

export const imdbIdExists = (obj: AllMediaDataType): boolean => {
    if (obj.metadata) {
        if (obj.metadata.imdb_id) {
            return true;
        }
    }
    return false;
};

export const tmdbIdExists = (obj: AllMediaDataType): boolean => {
    if (obj.metadata) {
        if (obj.metadata.tmdb_id) {
            return true;
        }
    }
    return false;
};

export const yearExists = (obj: AllMediaDataType): boolean => {
    if (obj.metadata) {
        if (obj.metadata.release_date) {
            return true;
        }
    }
    return false;
};

export const remodelData = (
    obj: { [s: string]: unknown } | ArrayLike<unknown>
) => {
    // const filteredData = {} as MetadataType;
    const filteredData: any = {};
    Object.entries(obj).forEach(([key, value]: any) => {
        if (value) {
            switch (key) {
                case 'id':
                    filteredData.tmdb_id = value;
                    filteredData.tmdb_url = `https://www.themoviedb.org/movie/${value}`;
                    break;

                case 'name':
                    filteredData.title = value;
                    break;

                case 'poster_path':
                    filteredData.poster_path = `https://image.tmdb.org/t/p/w500${value}`;
                    /* {
                    original: `https://image.tmdb.org/t/p/original${value}`,
                    w500: `https://image.tmdb.org/t/p/w500${value}`,
                }; */
                    break;

                case 'backdrop_path':
                    filteredData.backdrop_path = `https://image.tmdb.org/t/p/w500${value}`;
                    /* {
                    original: `https://image.tmdb.org/t/p/original${value}`,
                    w500: `https://image.tmdb.org/t/p/w500${value}`,
                }; */
                    break;

                case 'genre_ids':
                    filteredData.genres = genresConvert(value);
                    break;
                default:
                    filteredData[key] = value;
                    break;
            }
        } else {
            switch (key) {
                case 'id':
                    filteredData.tmdb_id = value;
                    filteredData.tmdb_url = value;
                    break;

                case 'name':
                    filteredData.title = value;
                    break;

                default:
                    filteredData[key] = value;
                    break;
            }
        }
    });
    return filteredData;
};
