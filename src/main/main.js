const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const windowStateKeeper = require('electron-window-state');

const { scanDir } = require('../renderer/sourceImport/scanDir');
const { fileSorting } = require('./fileSorting');

function createWindow() {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1200,
        defaultHeight: 1000,
    });
    const mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        backgroundColor: '#ffffff', //TO-DO: MAKE THE SAME COLOR AS THE APP BACKGROUND COLOR
        icon: app.getAppPath() + '/resources/icons/icon_128x128.ico',
        webPreferences: {
            nodeIntegration: true,
        },
    });
    //mainWindow.maximize()

    const directorySelectorWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        icon: app.getAppPath() + '/resources/icons/icon_128x128.ico',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
    });

    mainWindowState.manage(mainWindow);

    mainWindow.webContents.openDevTools();

    directorySelectorWindow.webContents.openDevTools();

    ipcMain.on('openDir_async', (event, arg) => {
        let reply = {
            media: [],
            sub: [],
            nfo: [],
        };
        dialog
            .showOpenDialog(directorySelectorWindow, {
                properties: ['openDirectory', 'multiSelections'],
            })
            .then(result => {
                if (result.canceled === false) {
                    result.filePaths.forEach(async dirs => {
                        await scanDir(
                            dirs,
                            [arg.media, arg.sub, arg.nfo].flat(),
                            file => {
                                fileSorting(file, arg, reply);
                            }
                        );
                        event.reply('openDir_async_reply', reply);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    });

    mainWindow.loadFile('src/renderer/mainWindow/mainWindow.html');
    mainWindow.removeMenu();
    directorySelectorWindow.loadFile(
        'src/renderer/sourceImport/sourceImporter.html'
    );
    directorySelectorWindow.removeMenu();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
