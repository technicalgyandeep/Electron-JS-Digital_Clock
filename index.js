const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    //create Browser window
    win = new BrowserWindow({width:800, height:600,})

    //Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    

    win.on('closed', () => {
        win  = null;
    })
}

//Run the App
app.on('ready', createWindow);

// Quit when all the windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){

    }
});