const { app } = require('electron');
const fs = require('fs');

const config = {
    //SCAN PATHS
    addScanPath: array => {
        array.forEach(res => {
            if (!config.getScanPaths().includes(res)) {
                config.setScanPaths(res);
            }
        });
    },
    getScanPaths: () => {
        return config.readFile().scan_preferences.scan_paths;
    },
    setScanPaths: path => {
        let temp = config.readFile();
        temp.scan_preferences.scan_paths.push(path);
        config.writeFile(temp);
    },
    purgeScanPaths: () => {
        let temp = config.readFile();
        temp.scan_preferences.scan_paths.length = 0;
        config.writeFile(temp);
    },
    //SCAN RESULTS
    getScanResults: () => {
        return config.readFile().scan_preferences.scan_results;
    },
    setScanResults: obj => {
        let temp = config.readFile();
        temp.scan_preferences.scan_results = obj;
        config.writeFile(temp);
    },
    purgeScanResults: () => {
        let temp = config.readFile();
        temp.scan_preferences.scan_results = {};
        config.writeFile(temp);
    },
    //SCAN LANGUAGE
    getScanLanguage: () => {
        return config.readFile().scan_preferences.scan_language;
    },
    //SCAN FILETYPES
    getFileTypes: () => {
        return config.readFile().scan_preferences.scan_file_types;
    },

    //READ & WRITE FILE
    readFile: () => {
        return JSON.parse(fs.readFileSync('./config/config.json' /*'E:/GIT/mvp/config/config.json'*/));
    },
    writeFile: json => {
        fs.writeFileSync('./config/config.json', JSON.stringify(json, null, 4));
    },

    //SETUP
    setup: () => {
        let defaultConfigurations = {
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
};

//CSAK ÓVATOSAN EZZEL A METÓDUSSAL, MERT MINDENT A CONFIG FÁJLBÓL VESZ A PROGI
/*function deleteConfig(createConfig = true) {
    fs.unlink('./config/config.json', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Config file removed!');
    });

    if (createConfig) ipcRenderer_setupConfig();
}*/

module.exports.config = config;
