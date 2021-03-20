const { ipcRenderer } = require('electron');
const fs = require('fs');

const { setupConfig } = require('./configuration');

function ipcRenderer_setupConfig() {
    /*ipcRenderer.send('setup_configuration');

    ipcRenderer.on('setup_configuration_reply', (event, arg) => {
        if (!fs.existsSync(arg.appCurrentDirectory.concat('\\config\\config.json'))) {
            setupConfig(arg);
        } else {
            console.log('Config file already exist!');
        }
    });*/
    ipcRenderer.invoke('setup_config').then(result => {
        if (!fs.existsSync(result.appCurrentDirectory.concat('\\config\\config.json'))) {
            setupConfig(result);
        } else {
            console.log('Config file already exist!');
        }
    });
}

module.exports.ipcRenderer_setupConfig = ipcRenderer_setupConfig;
