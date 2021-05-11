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
            'write-to-file-storage-before-quit-ASYNC',
            async () => {
                await writeStorageBeforeQuitAsync();
                ipcRendererCommunication.send('quit-now');
            }
        );
    },
    openInDefaultPlayer: (file: string) => {
        ipcRendererCommunication.send('open-in-default-player-ASYNC', file);
    },
    openDevTools: () => {
        ipcRendererCommunication.send('open-dev-tools-ASYNC');
    },
    openCoverSelector: (): string[] => {
        return ipcRendererCommunication.sendSync('open-cover-selector');
    },
};
