const { ipcMain, dialog } = require('electron');

const { config } = require('./configuration');

function ipcMainCommunication(importWindow) {
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
                    config.addScanPath(result.filePaths);
                }
            })
            .catch(err => {
                console.log(err);
            });
    });
}

module.exports.ipcMainCommunication = ipcMainCommunication;
