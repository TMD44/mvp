export function offline_data_selection(mediaJSON) {
    if (mediaJSON.filename_data != undefined) {
        if (mediaJSON.filename_data.title != undefined) {
            return (mediaJSON.media_data.title = mediaJSON.filename_data.title);
        }
    }
}
