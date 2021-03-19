const fs = require('fs');
const { ipcRenderer_setupConfig } = require('./ipcRendererCommunication');

function addScanPath(array) {
    array.forEach(res => {
        if (!getScanPaths().includes(res)) {
            setScanPaths(res);
        }
    });
}

function getScanPaths() {
    return readConfig().scan_preferences.scan_paths;
}

function setScanPaths(path) {
    let temp = readConfig();
    temp.scan_preferences.scan_paths.push(path);
    writeConfig(temp);
}

function purgeScanPaths() {
    let temp = readConfig();
    temp.scan_preferences.scan_paths.length = 0;
    writeConfig(temp);
}

function getScanLanguage() {
    return readConfig().scan_preferences.scan_language;
}

function getFileTypes() {
    return readConfig().scan_preferences.scan_file_types;
}

function readConfig() {
    return JSON.parse(fs.readFileSync('./config/config.json' /*'E:/GIT/mvp/config/config.json'*/));
}

function writeConfig(json) {
    fs.writeFileSync('./config/config.json', JSON.stringify(json, null, 4));
}

function setupConfig(appInfo) {
    let defaultConfig = {
        name: 'Anonymous',
        appInfo: appInfo,
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
            source_priority_queue: ['FINAL_DATA', 'manual_data', 'filtered_data', 'imdb_data', 'tmdb_data', 'wiki_data', 'filename_data', 'nfo_data'],
            save_data_json_next_to_file: false,
        },
        ui_preferences: {
            ui_language: 'en-US',
        },
        backup_preferences: {
            create_backups: false,
            backup_file_number: 3,
        },
    };

    writeConfig(defaultConfig);
    console.log('Config file has been created!');
}

function deleteConfig(createConfig = true) {
    fs.unlink('./config/config.json', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Config file removed!');
    });

    if (createConfig) ipcRenderer_setupConfig();
}

module.exports.addScanPath = addScanPath;
module.exports.setScanPaths = setScanPaths;
module.exports.purgeScanPaths = purgeScanPaths;
module.exports.getScanPaths = getScanPaths;
module.exports.setupConfig = setupConfig;
module.exports.deleteConfig = deleteConfig;
module.exports.getFileTypes = getFileTypes;
module.exports.getScanLanguage = getScanLanguage;