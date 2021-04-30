export interface MediaType {
    creation_time: string;
    modification_time: string;
    movies: Record<string, unknown>;
    tv_series: Record<string, unknown>;
    playlists: string[];
    all_media: Record<string, unknown>;
}
