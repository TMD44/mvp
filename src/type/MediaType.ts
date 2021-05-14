export interface MediaType {
    creation_time: string;
    modification_time: string;
    movies: MoviesType;
    tv_series: TvSeriesType;
    playlists: PlaylistsType;
    all_media: AllMediaType;
}

export interface MoviesType {
    [key: string]: MoviesDataType;
}

export interface MoviesDataType {
    id: string[];
    media_type: string;
}

export interface TvSeriesType {
    [key: string]: TvSeriesDataType;
}

export interface TvSeriesDataType {
    id: string[];
    media_type: string;
}
export interface PlaylistsType {
    [key: string]: PlaylistsDataType;
}

export interface PlaylistsDataType {
    contents: MoviesType | TvSeriesType;
    media_type: string;
}

export interface AllMediaType {
    [key: string]: AllMediaDataType;
}

export interface AllMediaDataType {
    id: string;
    media_name: string;
    extension: string;
    path: string;
    full_path: string;
    subtitles: string[];
    nfo: string;
    metadata: MetadataType;
}

export interface MetadataType {
    media_type: string;
    title: string;
    codec: string | string[];
    genres: string[];
    release_date: number;
    quality: string;
    adult: boolean;
    backdrop_path: string;
    poster_path: string;
    tmdb_id: number;
    tmdb_url: string;
    imdb_id: string;
    imdb_url: string;
    original_language: string;
    original_title: string;
    first_air_date: string;
    original_name: string;
    overview: string;
    popularity: number;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
