import { StateType } from '@type/StateType';
import store from '../store';

// GETTERS
export const getAllMedia = () => store.getState().media.all_media;

export const getMediaByID = (id: string) => getAllMedia()[id];

// SELECTORS
export const mediaSelector = (state: StateType) => state.media.all_media;

export const moviesSelector = (state: StateType) => state.media.movies;

export const seriesSelector = (state: StateType) => state.media.tv_series;

export const playlistsSelector = (state: StateType) => state.media.playlists;
