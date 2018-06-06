const {app, BrowserWindow, Menu} = require('electron')

let win;

// const menuTemplate = [
//     {
//         label: 'Electron',
//         submenu: [
//             {
//                 label: 'About ...',
//                 click: () => {
//                     console.log('About Clicked');
//                 }
//             }, {
//                 type: 'separator'
//             }, {
//                 label: 'Quit',
//                 click: () => {
//                     app.quit();
//                 }
//             }
//         ]
//     }
// ];

const createWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
        width: 350,
        height: 270
    })

    // and load the index.html of the app.
    // win.loadFile(`file://${__dirname}/public/dist/index.html`)
    // Open the DevTools.
    // win.webContents.openDevTools()
    win.loadURL(`file://${__dirname}/public/dist/index.html`)
    // const menu = Menu.buildFromTemplate(menuTemplate);
    // Menu.setApplicationMenu(menu);
    // win.setMenu(menu)


    

    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// const menu = Menu.buildFromTemplate(menuTemplate)
// Menu.setApplicationMenu(menu)
app.on('ready', createWindow)


  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })