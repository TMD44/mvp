/* eslint-disable promise/always-return */
import { ipcMain, dialog } from 'electron';
import { config } from './configuration';
/*

import { ipcMain, dialog } from 'electron';
import { config } from './configuration';

export function ipcMainCommunication(window: Electron.BrowserWindow) {
    ipcMain.on('openDir_async', (event, arg) => {
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
}

export const ipcMain = {
    openDirAsync: (window: Electron.BrowserWindow) => {
        ipcMainCommunication.on('openDir-async', (event, arg) => {
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
}; */

export function ipcMainCommunication(importWindow) {
    ipcMain.on('openDir_async', (event, arg) => {
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
