import { config } from './../../main/configuration';
import { ipcRendererCommunication } from '../ipcRendererCommunication';
import { scan } from './scan';

document.getElementById('openDirButton').addEventListener('click', event => {
    config.purgeScanResults();
    ipcRendererCommunication();
});

document.getElementById('importSourcesButton').addEventListener('click', event => {
    //if (getScanPaths() > 0) console.log('Válassz ki egy mappát');

    scan.offlineScan();
});

document.getElementById('importWithMetadata').addEventListener('click', event => {
    scan.onlineScan();
});

document.getElementById('deleteDirs').addEventListener('click', event => {
    config.purgeScanPaths();
});

//DINAMIKUSAN FRISSÜLŐ ÉRTÉKEK
/*setInterval(() => {
    
    //document.getElementById("selected_files_length").innerHTML = filesArray.media.length;
    //document.getElementById("selected_files").value = filesArray.media;
}, 100);*/
