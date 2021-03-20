const { app, ipcMain, dialog } = require('electron');

const { scanDir } = require('../renderer/sourceImport/tools/scanDir');
const { fileSorting } = require('./fileSorting');
const { getScanPaths, addScanPath, getFileTypes, setScanResults } = require('../configuration');

function ipcMainCommunication(mainWindow, importWindow) {
    ipcMain.handle('setup_config', async (event, args) => {
        let info_reply = {
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
        };
        return info_reply;
    });

    ipcMain.on('openDir_async', (event, arg) => {
        let reply = {
            media: [],
            sub: [],
            nfo: [],
        };
        dialog
            .showOpenDialog(importWindow, {
                properties: ['openDirectory', 'multiSelections'],
            })
            .then(result => {
                if (result.canceled === false) {
                    addScanPath(result.filePaths);

                    let paths = getScanPaths();
                    let { media, sub, nfo } = getFileTypes();

                    paths.forEach(async dir => {
                        await scanDir(dir, [media, sub, nfo].flat(), file => {
                            fileSorting(file, media, sub, nfo, reply);
                        });

                        setScanResults(reply);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    });
}

module.exports.ipcMainCommunication = ipcMainCommunication;
