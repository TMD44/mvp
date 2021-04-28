export const imdbIdExists = (obj: Record<string, unknown>): boolean => {
    if (obj.metadata) {
        if (obj.metadata.imdb_id) {
            return true;
        }
    }
    return false;
};

export const tmdbIdExists = (obj: Record<string, unknown>): boolean => {
    if (obj.metadata) {
        if (obj.metadata.tmdb_id) {
            return true;
        }
    }
    return false;
};

export const tvdbIdExists = (obj: Record<string, unknown>): boolean => {
    if (obj.metadata) {
        if (obj.metadata.tvdb_id) {
            return true;
        }
    }
    return false;
};

export const remodelData = (obj: any) => {
    const filteredData: Record<string, unknown> = {};
    Object.entries(obj).forEach(([key, value]) => {
        switch (key) {
            case 'id':
                filteredData.tmdb_id = value;
                filteredData.tmdb_url = `https://www.themoviedb.org/movie/${value}`;
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
                filteredData.genres = value;
                // TODO: handle the genre convertion
                break;
            default:
                console.log('KEY: ', key);
                console.log('VALUE: ', value);
                console.log('FD: ', filteredData);
                filteredData[key] = value;
                break;
        }
    });
    return filteredData;
};
