import { ipcRenderer } from 'electron';

export function ipcRendererCommunication() {
    ipcRenderer.send('openDir_async');
}
