export interface MediaType {
    creation_time: string;
    modification_time: string;
    movies: string[];
    tv_series: Record<string, unknown>;
    movie_series: Record<string, unknown>;
    playlists: string[];
    all_media: Record<string, unknown>;
}
