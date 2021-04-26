import { ipcRenderer as ipcRendererCommunication } from 'electron';
import { writeStorageBeforeQuit } from '@scripts/writeStorageToFile';

export const ipcRenderer = {
    openDirSync: (): string[] => {
        return ipcRendererCommunication.sendSync('open-dir-sync');
    },
    openDirAsync: () => {
        // ipcRendererCommunication.send('openDir-async');
    },
    writeStorageBeforeQuit: () => {
        ipcRendererCommunication.on(
            'write-to-file-storage-before-quit',
            async () => {
                await writeStorageBeforeQuit();
                ipcRendererCommunication.send('quit-now');
            }
        );
    },
};
