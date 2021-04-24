import { app } from 'electron';
import { promises as fsp } from 'fs';
import { getConfigPath } from '../scripts/getPaths';

const CONFIG_PATH = getConfigPath('config.json');

interface ScanResultsType {
    media: string[];
    sub: string[];
    nfo: string[];
}

// TODO
// interface ConfigType {}

export const config = {
    // TODO: FURTHER DEVELOPMENT REQUIRED
    getAny: async (f: string, s: string) => {
        const confFile = await config.readFile();
        if (!confFile[f]) return 'ERROR';
        return confFile[f][s];
    },

    // SCAN PATHS
    addScanPath: async (results: string[]) => {
        const scanPaths = await config.getScanPaths();
        // eslint-disable-next-line no-restricted-syntax
        for (const result in results) {
            if (!scanPaths.includes(results[result])) {
                // eslint-disable-next-line no-await-in-loop
                await config.setScanPaths(results[result]);
            }
        }
    },
    getScanPaths: async () => {
        const confFile = await config.readFile();
        return confFile.scan_preferences.scan_paths;
    },
    setScanPaths: async (path: string) => {
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
    setScanResults: async (obj: ScanResultsType) => {
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
        let data = '';
        try {
            data = await fsp.readFile(CONFIG_PATH, 'utf8');
        } catch (error) {
            console.error(error);
        }
        return JSON.parse(data);
    },

    writeFile: async (json: Record<string, unknown>) => {
        try {
            await fsp.writeFile(
                CONFIG_PATH,
                JSON.stringify(json, null, 4),
                'utf8'
            );
        } catch (error) {
            console.error(error);
        }
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

/*   JAVASCRIPT VERSION FOR BACKUP:

import { app } from 'electron';
import { promises as fsp } from 'fs';
import { getConfigPath } from './getPaths';

const CONFIG_PATH = getConfigPath('config.json');

export const config = {
    // TODO: FURTHER DEVELOPMENT REQUIRED
    getAny: async (f, s) => {
        const confFile = await config.readFile();
        if (!confFile[f]) return 'ERROR';
        return confFile[f][s];
    },

    // SCAN PATHS
    addScanPath: async (results) => {
        const scanPaths = await config.getScanPaths();
        // eslint-disable-next-line no-restricted-syntax
        for (const result in results) {
            if (!scanPaths.includes(results[result])) {
                // eslint-disable-next-line no-await-in-loop
                await config.setScanPaths(results[result]);
            }
        }
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
        let data = {};
        try {
            data = await fsp.readFile(CONFIG_PATH, 'utf8');
        } catch (error) {
            console.error(error);
        }
        return JSON.parse(data);
    },

    writeFile: async (json) => {
        try {
            await fsp.writeFile(
                CONFIG_PATH,
                JSON.stringify(json, null, 4),
                'utf8'
            );
        } catch (error) {
            console.error(error);
        }
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
    deleteConfig: (createConfig = true) => {
        fs.unlink('./config/config.json', err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Config file removed!');
        });

        if (createConfig) config.setup();
    },
};
*/
