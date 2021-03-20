const { ipcRenderer } = require('electron');
const fs = require('fs');

//const { setupConfig } = require('../configuration');

/*function ipcRenderer_setupConfig() {
    ipcRenderer.invoke('setup_config').then(result => {
        if (!fs.existsSync(result.appCurrentDirectory.concat('\\config\\config.json'))) {
            setupConfig(result);
        } else {
            console.log('Config file already exist!');
        }
    });
}*/

//module.exports.ipcRenderer_setupConfig = ipcRenderer_setupConfig;
