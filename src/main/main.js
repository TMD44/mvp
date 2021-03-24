const { app, BrowserWindow } = require('electron');
const windowStateKeeper = require('electron-window-state');

const { ipcMainCommunication } = require('./ipcMainCommunication');
const { config } = require('./configuration');
const { cleanBeforeQuit } = require('./cleanBeforeQuit');

function createWindow() {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1200,
        defaultHeight: 1000,
    });
    /*const mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        backgroundColor: '#ffffff', //TO-DO: MAKE THE SAME COLOR AS THE APP BACKGROUND COLOR
        icon: app.getAppPath() + '/resources/icons/icon_128x128.ico',
        webPreferences: {
            nodeIntegration: true,
        },
    });*/

    const sourceImportWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: app.getAppPath() + '/resources/icons/icon_128x128.ico',
        //parent: mainWindow,
        //modal: true,
        //show: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    //mainWindowState.manage(mainWindow);

    //mainWindow.webContents.openDevTools();

    sourceImportWindow.webContents.openDevTools();

    //mainWindow.loadFile('src/renderer/mainWindow/mainWindow.html');
    //mainWindow.removeMenu();

    sourceImportWindow.loadFile('src/renderer/sourceImport/sourceImporter.html');
    //sourceImportWindow.removeMenu();
    /*sourceImportWindow.once('ready-to-show', () => {
        sourceImportWindow.show();
    });*/
    
    config.setup();
    ipcMainCommunication(sourceImportWindow);
}

app.whenReady().then(createWindow);

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
