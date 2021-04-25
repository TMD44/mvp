/* eslint-disable global-require */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
    app,
    BrowserWindow,
    session,
    shell,
    ipcMain as ipcQuit,
} from 'electron';
import windowStateKeeper from 'electron-window-state';
import { ipcMain } from './ipcMain';
import { configureStorage } from '../scripts/configureStorage';
import { getAssetsPath } from '../scripts/getPaths';
// import MenuBuilder from './menu';
// import appUpdater from './appUpdater';

const isProductionMode = process.env.NODE_ENV === 'production';
const isDevelopmentMode =
    process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

// TODO: in production hide electron security warnings
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

if (isProductionMode) {
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
}

if (isDevelopmentMode) {
    require('electron-debug')(); // THROWS WARNINGS
}

// These extensions now loaded directly
// Hide error messages from extension: Console->Options->Selected Context Only
const installExtensions = async () => {
    const REACT_PATH = 'G:/mvp/.erb/plugins/ReactDevTools/4.12.3_0';
    const REDUX_PATH = 'G:/mvp/.erb/plugins/ReduxDevTools/2.17.0_0';
    /* const REACT_PATH =
        'C:\\Users\\tmd-pc\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\4.12.3_0';
    const REDUX_PATH =
        'C:\\Users\\tmd-pc\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.17.0_0'; */
    await session.defaultSession.loadExtension(REACT_PATH, {
        allowFileAccess: true,
    });
    await session.defaultSession.loadExtension(REDUX_PATH, {
        allowFileAccess: true,
    });
};

let appWindow: BrowserWindow | null = null;

const createWindow = async () => {
    if (isDevelopmentMode) {
        await installExtensions();
    }

    configureStorage();

    const appWindowState = windowStateKeeper({
        defaultWidth: 1200,
        defaultHeight: 800,
    });

    appWindow = new BrowserWindow({
        x: appWindowState.x,
        y: appWindowState.y,
        width: appWindowState.width,
        height: appWindowState.height,
        minWidth: 1200,
        minHeight: 700,
        icon: getAssetsPath('icon.png'),
        webPreferences: {
            nodeIntegration: true,
        },
    });

    appWindowState.manage(appWindow);

    appWindow.removeMenu();

    if (isProductionMode) {
        appWindow.loadURL(`file://${app.getAppPath()}/app/index.html`);
    } else {
        appWindow.loadFile('../app/index.html');
    }

    /* if (isDevelopmentMode) {
        appWindow.webContents.openDevTools();
    } */
    appWindow.webContents.openDevTools();

    // const menuBuilder = new MenuBuilder(appWindow);
    // menuBuilder.buildMenu();

    // Opens URLs in user's the default browser
    appWindow.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });

    ipcMain.openDirSync(appWindow);

    appWindow.on('closed', () => {
        app.quit();
    });

    let quitStatus = 0;
    appWindow.on('close', (event: { preventDefault: () => void }) => {
        if (quitStatus === 0) {
            if (appWindow) {
                event.preventDefault();
                appWindow.webContents.send('write-storage-before-quit');
            }
        }
    });

    ipcQuit.on('quit-now', () => {
        quitStatus = 1;
        appWindow = null;
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
};

app.whenReady().then(createWindow).catch(console.log);

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
