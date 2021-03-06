/* eslint-disable promise/always-return */
import { ipcMain as ipcMainCommunication, dialog, app, shell } from 'electron';

export const ipcMain = {
    openDirSync: (window: Electron.BrowserWindow) => {
        ipcMainCommunication.on('open-dir-sync', (event) => {
            dialog
                .showOpenDialog(window, {
                    properties: ['openDirectory', 'multiSelections'],
                })
                .then((result) => {
                    if (result.canceled === false) {
                        event.returnValue = result.filePaths;
                    } else {
                        event.returnValue = [];
                    }
                })
                .catch((error) => {
                    console.error('Error from ipcMain.ts: ', error);
                });
        });
    },
    getAppDataSync: () => {
        ipcMainCommunication.on('get-app-data-sync', (event) => {
            const appData = {
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
                    // recent: app.getPath('recent'), // Windows only
                    exe: app.getPath('exe'),
                    crash_dumps: app.getPath('crashDumps'),
                },
            };
            event.returnValue = appData;
        });
    },
    openInDefaultPlayerAsync: () => {
        ipcMainCommunication.on(
            'open-in-default-player-ASYNC',
            (_event, arg) => {
                shell.openExternal(arg);
            }
        );
    },
    openDevToolsAsync: (window: Electron.BrowserWindow) => {
        ipcMainCommunication.on('open-dev-tools-ASYNC', () => {
            window.webContents.openDevTools();
        });
    },
    openCoverSelector: (window: Electron.BrowserWindow) => {
        ipcMainCommunication.on('open-cover-selector', (event) => {
            dialog
                .showOpenDialog(window, {
                    properties: ['openFile'],
                    filters: [
                        { name: 'Images', extensions: ['jpg', 'png', 'bmp'] },
                    ],
                })
                .then((result) => {
                    if (result.canceled === false) {
                        event.returnValue = result.filePaths;
                    } else {
                        event.returnValue = [];
                    }
                })
                .catch((error) => {
                    console.error('Error from ipcMain.ts: ', error);
                });
        });
    },
};
