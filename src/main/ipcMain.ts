/* eslint-disable promise/always-return */
import { ipcMain as ipcMainCommunication, dialog } from 'electron';
import { config } from './configuration';

export const ipcMain = {
    openDirAsync: (window: Electron.BrowserWindow) => {
        ipcMainCommunication.on('openDir-async', () => {
            dialog
                .showOpenDialog(window, {
                    properties: ['openDirectory', 'multiSelections'],
                })
                .then((result) => {
                    if (result.canceled === false) {
                        config.addScanPath(result.filePaths);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },
};
