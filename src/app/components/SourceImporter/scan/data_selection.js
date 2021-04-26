/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */

export function offlineDataSelection(mediaJSON) {
    if (mediaJSON.filename_data !== undefined) {
        if (mediaJSON.filename_data.title !== undefined) {
            return (mediaJSON.media_data.title = mediaJSON.filename_data.title);
        }
    }
}
