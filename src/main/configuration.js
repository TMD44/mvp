import { app } from 'electron';
import { promises as fsp } from 'fs';

export const config = {
    // SCAN PATHS
    addScanPath: async (results) => {
        const scanPaths = await config.getScanPaths();
        results.forEach((result) => {
            if (!scanPaths.includes(result)) {
                config.setScanPaths(result);
            }
        });
    },
    getScanPaths: async () => {
        const confFile = await config.readFile();
        return confFile.scan_preferences.scan_paths;
    },
    setScanPaths: async (path) => {
        const confFile = await config.readFile();
        confFile.scan_preferences.scan_paths.push(path);
        await config.writeFile(confFile);
    },
    purgeScanPaths: async () => {
        const confFile = await config.readFile();
        confFile.scan_preferences.scan_paths.length = 0;
        await config.writeFile(confFile);
    },
    // SCAN RESULTS
    getScanResults: async () => {
        const confFile = await config.readFile();
        return confFile.scan_preferences.scan_results;
    },
    setScanResults: async (obj) => {
        const confFile = await config.readFile();
        confFile.scan_preferences.scan_results = obj;
        await config.writeFile(confFile);
    },
    purgeScanResults: async () => {
        const confFile = await config.readFile();
        confFile.scan_preferences.scan_results = {};
        await config.writeFile(confFile);
    },
    // SCAN LANGUAGE
    getScanLanguage: async () => {
        const confFile = await config.readFile();
        return confFile.scan_preferences.scan_language;
    },
    // SCAN FILETYPES
    getFileTypes: async () => {
        const confFile = await config.readFile();
        return confFile.scan_preferences.scan_file_types;
    },

    // READ & WRITE FILE
    readFile: async () => {
        const data = await fsp.readFile('./config/config.json', 'utf8');
        return JSON.parse(data);
    },

    writeFile: async (json) => {
        await fsp.writeFile(
            './config/config.json',
            JSON.stringify(json, null, 4),
            'utf8'
        );
    },

    // SETUP
    setup: () => {
        const defaultConfigurations = {
            name: 'Anonymous',
            appInfo: {
                appName: app.getName(),
                appVersion: app.getVersion(),
                appCurrentDirectory: app.getAppPath(),
                appLocale: app.getLocale(),
                appLocaleCountryCode: app.getLocaleCountryCode(),
                appPaths: {
                    home: app.getPath('home'),
                    userData: app.getPath('userData'),
                    appData: app.getPath('appData'),
                    desktop: app.getPath('desktop'),
                    downloads: app.getPath('downloads'),
                    documents: app.getPath('documents'),
                    pictures: app.getPath('pictures'),
                    videos: app.getPath('videos'),
                    music: app.getPath('music'),
                    temp: app.getPath('temp'),
                    recent: app.getPath('recent'),
                    exe: app.getPath('exe'),
                    crashDumps: app.getPath('crashDumps'),
                },
            },
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
                    sub: [
                        '.srt',
                        '.ass',
                        '.vtt',
                        '.ssa',
                        '.sub',
                        '.stl',
                        '.scc',
                    ],
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

        config.writeFile(defaultConfigurations);
        console.log('Config file has been created!');
    },
    // CSAK ÓVATOSAN EZZEL A METÓDUSSAL, MERT MINDENT A CONFIG FÁJLBÓL OLVAS KI A PROGRAM
    /* deleteConfig: (createConfig = true) => {
        fs.unlink('./config/config.json', err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Config file removed!');
        });

        if (createConfig) config.setup();
    }, */
};
