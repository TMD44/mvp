const { app, ipcMain, dialog } = require('electron');

const { scanDir } = require('../renderer/sourceImport/tools/scanDir');
const { fileSorting } = require('./fileSorting');
const { getScanPaths, addScanPath, getFileTypes } = require('./../renderer/configuration');

function ipcMainCommunication(mainWindow, importWindow) {
    /*ipcMain.on('setup_configuration', (event, args) => {
        let info_reply = {
            appName: app.getName(),
            appVersion: app.getVersion(),
            appCurrentDirectory: app.getAppPath(),
            appLocale: app.getLocale(),
            appPaths: {
                home: app.getPath('home'),
                userData: app.getPath('userData'),
                appData: app.getPath('appData'),
                desktop: app.getPath('desktop'),
                downloads: app.getPath('downloads'),
                documents: app.getPath('documents'),
                pictures: app.getPath('pictures'),
                videos: app.getPath('videos'),
                temp: app.getPath('temp'),
                recent: app.getPath('recent'),
                exe: app.getPath('exe'),
            },
        };
        console.log("HIIII: ", info_reply)
        //return info_reply;
        event.reply('setup_configuration_reply', info_reply);
    });*/
    ipcMain.handle('setup_config', async (event, args) => {
        let info_reply = {
            appName: app.getName(),
            appVersion: app.getVersion(),
            appCurrentDirectory: app.getAppPath(),
            appLocale: app.getLocale(),
            appPaths: {
                home: app.getPath('home'),
                userData: app.getPath('userData'),
                appData: app.getPath('appData'),
                desktop: app.getPath('desktop'),
                downloads: app.getPath('downloads'),
                documents: app.getPath('documents'),
                pictures: app.getPath('pictures'),
                videos: app.getPath('videos'),
                temp: app.getPath('temp'),
                recent: app.getPath('recent'),
                exe: app.getPath('exe'),
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

                        event.reply('openDir_async_reply', reply);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    });
}

module.exports.ipcMainCommunication = ipcMainCommunication;
