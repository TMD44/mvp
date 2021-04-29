import store from '../store';

export const getAllMedia = () => store.getState().media.all_media;

export const mediaSelector = (state) => state.media.all_media;

export const moviesSelector = (state) => state.media.movies;

export const seriesSelector = (state) => state.media.tv_series;

export const playlistsSelector = (state) => state.media.playlists;
