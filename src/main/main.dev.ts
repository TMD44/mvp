import { app, BrowserWindow } from 'electron';
import windowStateKeeper from 'electron-window-state';
import { ipcMainCommunication } from './ipcMainCommunication';
import { config } from './configuration';
import { cleanBeforeQuit } from './cleanBeforeQuit';

// TODO: nézd át a boilerplate generált main.ts ét és minden hasznos dolgot át lehet emelni!
// pl. menu.ts-t fel lehet használni!

function createWindow() {
    const mainWindowState = windowStateKeeper({
        defaultWidth: 1200,
        defaultHeight: 1000,
    });

    const mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        icon: `${app.getAppPath()}/assets/icons/icon_128x128.ico`,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindowState.manage(mainWindow);

    mainWindow.loadFile('../renderer/App/index.html');

    mainWindow.webContents.openDevTools();

    config.setup();
    ipcMainCommunication(mainWindow);
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
