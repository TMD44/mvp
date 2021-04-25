/* eslint-disable promise/always-return */
import { ipcMain as ipcMainCommunication, dialog, app } from 'electron';

export const ipcMain = {
    openDirSync: (window: Electron.BrowserWindow) => {
        ipcMainCommunication.on('openDir-sync', (event) => {
            dialog
                .showOpenDialog(window, {
                    properties: ['openDirectory', 'multiSelections'],
                })
                .then((result) => {
                    if (result.canceled === false) {
                        // config.addScanPath(result.filePaths);
                        // event.reply('openDir-async-reply', result.filePaths);
                        event.returnValue = result.filePaths;
                    } else {
                        event.returnValue = [];
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },
};
