export const ADD_MEDIA = 'ADD_MEDIA';
export const ADD_MEDIA_AT_ONCE = 'ADD_MEDIA_AT_ONCE';
export const UPDATE_MEDIA = 'UPDATE_MEDIA';
export const DELETE_MEDIA = 'DELETE_MEDIA';

export const addMedia = (media: any) => ({
    type: ADD_MEDIA,
    payload: media,
});

export const addMediaAtOnce = (media: any) => ({
    type: ADD_MEDIA_AT_ONCE,
    payload: media,
});

export const updateMedia = (media: any) => ({
    type: UPDATE_MEDIA,
    payload: media,
});

export const deleteMedia = (media: any) => ({
    type: DELETE_MEDIA,
    payload: media,
});
