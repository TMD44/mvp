import { ipcRenderer as ipcRendererCommunication } from 'electron';

export const ipcRenderer = {
    openDirAsync: () => {
        ipcRendererCommunication.send('openDir-async');
    },
};
