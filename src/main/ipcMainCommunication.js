/* eslint-disable promise/always-return */
import { ipcMain, dialog } from 'electron';
import { config } from './configuration';

export function ipcMainCommunication(importWindow) {
    ipcMain.on('openDir_async', (event, arg) => {
        const reply = {
            media: [],
            sub: [],
            nfo: [],
        };
        dialog
            .showOpenDialog(importWindow, {
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
}
