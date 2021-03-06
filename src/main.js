const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

let win;

function createWindow() {
    win = new BrowserWindow({width:500,height:800})
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: false
    }));
    win.on('closed', () =>{
        win = null;
    })
}

app.on('ready',createWindow);

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', () =>{
    if (win === null) {
        createWindow()
    }
});