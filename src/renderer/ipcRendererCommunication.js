const { ipcRenderer } = require('electron');

function ipcRendererCommunication() {
    ipcRenderer.send('openDir_async');
}

module.exports.ipcRendererCommunication = ipcRendererCommunication;
