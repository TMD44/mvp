import { ipcRenderer as ipcRendererCommunication } from 'electron';
import {
    writeStorageBeforeQuitAsync,
    writeStorageBeforeQuitSync,
} from '@scripts/writeStorageToFile';

export const ipcRenderer = {
    openDirSync: (): string[] => {
        return ipcRendererCommunication.sendSync('open-dir-sync');
    },
    openDirAsync: () => {
        // ipcRendererCommunication.send('openDir-async');
    },
    writeStorageBeforeQuitSync: () => {
        ipcRendererCommunication.on('write-to-file-storage-before-quit', () => {
            writeStorageBeforeQuitSync();
            ipcRendererCommunication.send('quit-now');
        });
    },
    writeStorageBeforeQuitAsync: () => {
        ipcRendererCommunication.on(
            'write-to-file-storage-before-quit',
            async () => {
                await writeStorageBeforeQuitAsync();
                ipcRendererCommunication.send('quit-now');
            }
        );
    },
};
