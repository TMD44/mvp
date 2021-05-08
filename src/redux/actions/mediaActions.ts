export const ADD_MEDIA = 'ADD_MEDIA';
export const ADD_MEDIA_AT_ONCE = 'ADD_MEDIA_AT_ONCE';
export const ADD_TO_MEDIA = 'ADD_TO_MEDIA';
export const UPDATE_MEDIA = 'UPDATE_MEDIA';
export const DELETE_MEDIA = 'DELETE_MEDIA';

export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_SERIES = 'ADD_SERIES';
export const PURGE_MOVIES = 'PURGE_MOVIES';
export const PURGE_SERIES = 'PURGE_SERIES';
export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const ADD_MEDIA_TO_PLAYLIST = 'ADD_MEDIA_TO_PLAYLIST';
export const DELETE_MEDIA_FROM_PLAYLIST = 'DELETE_MEDIA_FROM_PLAYLIST';

export const PURGE_ALL_MEDIA = 'PURGE_ALL_MEDIA';

export const addMedia = (media: any) => ({
    type: ADD_MEDIA,
    payload: media,
});

export const addMediaAtOnce = (media: any) => ({
    type: ADD_MEDIA_AT_ONCE,
    payload: media,
});

export const addToMedia = (id: string, media: any) => ({
    type: ADD_TO_MEDIA,
    payload: { id, media },
});

export const updateMedia = (media: any) => ({
    type: UPDATE_MEDIA,
    payload: media,
});

export const deleteMedia = (media: any) => ({
    type: DELETE_MEDIA,
    payload: media,
});

export const addMovie = (movie: string) => ({
    type: ADD_MOVIE,
    payload: movie,
});

export const addSeries = (title: string, id: string) => ({
    type: ADD_SERIES,
    payload: { title, id },
});

export const purgeMovies = () => ({
    type: PURGE_MOVIES,
    payload: {},
});

export const purgeSeries = () => ({
    type: PURGE_SERIES,
    payload: {},
});

export const purgeAllMedia = () => ({
    type: PURGE_ALL_MEDIA,
    payload: {},
});

export const addPlaylist = (playlist: any) => ({
    type: ADD_PLAYLIST,
    payload: playlist,
});

export const deletePlaylist = (playlist: any) => ({
    type: DELETE_PLAYLIST,
    payload: playlist,
});

export const addMediaToPlaylist = (title: any, media: any, playlist: any) => ({
    type: ADD_MEDIA_TO_PLAYLIST,
    payload: { title, media, playlist },
});

export const deleteMediaFromPlaylist = (title: any, playlist: any) => ({
    type: DELETE_MEDIA_FROM_PLAYLIST,
    payload: { title, playlist },
});
