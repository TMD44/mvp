import {
    autoUpdater,
    AppImageUpdater,
    MacUpdater,
    NsisUpdater,
} from 'electron-updater';
import log from 'electron-log';

export default class AppUpdater {
    constructor() {
        log.transports.file.level = 'info';
        autoUpdater.logger = log;

        autoUpdater.checkForUpdatesAndNotify();
    }
}

export const appUpdater = () => {
    // eslint-disable-next-line no-new
    new AppUpdater();
};
