import { ipcRenderer as ipcRendererCommunication } from 'electron';
import { writeStorageBeforeQuit } from '@scripts/writeStorageToFile';

export const ipcRenderer = {
    openDirSync: (): string[] => {
        return ipcRendererCommunication.sendSync('openDir-sync');
    },
    openDirAsync: () => {
        // ipcRendererCommunication.send('openDir-async');
    },
    writeStorageBeforeQuit: /* async */ () => {
        ipcRendererCommunication.on('write-storage-before-quit', async () => {
            await writeStorageBeforeQuit();
            ipcRendererCommunication.send('quit-now');
        });
    },
};
