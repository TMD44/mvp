import { ipcRenderer } from 'electron';
import { MediaType } from '../../types/MediaType';
import { getDateAndTime } from '../../scripts/date';

const appData = ipcRenderer.sendSync('get-app-data-sync');

export const configDefaultState = {
    creation_time: getDateAndTime(),
    modification_time: getDateAndTime(),
    user_info: { name: 'Anonymous' },
    app_info: appData,
    /* {
        app_name: app.getName(),
        app_version: app.getVersion(),
        app_current_directory: app.getAppPath(),
        app_locale: app.getLocale(),
        app_locale_country_code: app.getLocaleCountryCode(),
        app_paths: {
            home: app.getPath('home'),
            user_data: app.getPath('userData'),
            app_data: app.getPath('appData'),
            desktop: app.getPath('desktop'),
            downloads: app.getPath('downloads'),
            documents: app.getPath('documents'),
            pictures: app.getPath('pictures'),
            videos: app.getPath('videos'),
            music: app.getPath('music'),
            temp: app.getPath('temp'),
            recent: app.getPath('recent'),
            exe: app.getPath('exe'),
            crash_dumps: app.getPath('crashDumps'),
        },
    }, */
    ui_preferences: {
        ui_language: 'en-US',
    },
    backup_preferences: {
        create_backups: false,
        backup_file_number: 3,
    },
    api_keys: {
        tmdb_api_key: '',
        omdb_api_key: '',
    },
    scan_preferences: {
        scan_language: 'en-US',
        scan_paths: [],
        scan_file_types: {
            media: ['.mkv', '.mp4', '.avi'],
            sub: ['.srt', '.ass', '.vtt', '.ssa', '.sub', '.stl', '.scc'],
            nfo: ['.nfo'],
        },
        scan_components: {
            fnr: true,
            tmdb: true,
            wiki: true,
            sub: true,
            nfo: true,
        },
        source_priority_queue: [
            'FINAL_DATA',
            'manual_data',
            'filtered_data',
            'imdb_data',
            'tmdb_data',
            'wiki_data',
            'folder_data',
            'filename_data',
            'nfo_data',
        ],
        save_data_json_next_to_file: false,
        scan_results: {},
    },
};

export const movieDbDefaultState: MediaType = {
    creation_time: getDateAndTime(),
    modification_time: getDateAndTime(),
    movies: {},
    tv_series: {},
    playlists: {},
    all_media: {},
};
