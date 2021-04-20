import { app, BrowserWindow, shell } from 'electron';
import windowStateKeeper from 'electron-window-state';
import { ipcMainCommunication } from './ipcMainCommunication';
import { config } from './configuration';
import { cleanBeforeQuit } from './cleanBeforeQuit';

// TODO: nézd át a boilerplate generált main.ts ét és minden hasznos dolgot át lehet emelni!
// pl. menu.ts-t fel lehet használni!

function createWindow() {
    const appWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800,
    });

    const appWindow = new BrowserWindow({
        x: appWindowState.x,
        y: appWindowState.y,
        width: appWindowState.width,
        height: appWindowState.height,
        icon: '../../assets/icons/icon.svg',
        webPreferences: {
            nodeIntegration: true,
        },
    });

    appWindowState.manage(appWindow);

    appWindow.loadFile('../renderer/App/index.html');

    appWindow.webContents.openDevTools();

    appWindow.removeMenu();

    // Opens link on user's the default browser
    appWindow.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });

    config.setup();
    ipcMainCommunication(appWindow);
}

app.whenReady().then(createWindow).catch(console.log);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        cleanBeforeQuit();
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
