#electron-app

*ELECTRON:* Electron is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining Chromium and Node.js into a single runtime and apps can be packaged for Mac, Windows, and Linux.

*THIS APP :  Electron-Guide*

An Electron application is essentially a Node.js application. The starting point is a `package.json` that is identical to that of a `Node.js` module.

Step 1: Installing Electron

`npm install --save electron`

This will install electron dependancy in your machine.

Step 2. Create The Browser Window and load index.html

```
const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({width: 800, height: 400})
  
    // and load the index.html of the app.
    win.loadFile('index.html')

     // Open the DevTools.
    win.webContents.openDevTools()

    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })
  }
  
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

  ```

`Note:`
* `BrowserWindow()` generate an desktops application with height and width specified 
* `loadFile()` will load the view file for the desktop application
* `webContents.opendevTools()`open the developer tools for development purpose in desktop application.

`Events:` There are no. of events associted with app. Some of them are listed below.
* `ready` event fires when app loads first i.e. why createWindow() associated to it to create desktop app
* `window-all-closed` event fires when all windows closed  i.e. why `app.quit()` is called at that time


Step 3: Running Electron Application

`electron .` command is used to run electron application.

*or* we can update `scripts` part of our `package.json` to run it through `npm`.
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "electron": "electron ."
  }s
```

`npm run electron` use this command to run elctron application after updating `package.json`. 

Step 4: Creating Build

`npm install electron-packager --save`

`electron-packager` module is used to create build for electron desktop application.


It provides shell commands to create build for different platfoms.

*For MAC* `electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds`

*For Windows* `electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Electron Tutorial App\"`

*For Linux* `electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds`

*or* we can update `scripts` part of our `package.json` to run it through `npm`.
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "electron": "electron .",
    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds", 
    "package-win": "electron-packager . electron-app --overwrite --asar=true --platform=win32 --arch=ia32 --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Electron App\"", 
    "package-linux": "electron-packager . electron-app --overwrite --asar=true --platform=linux --arch=x64  --prune=true --out=release-builds" 
  },
```

`npm run package-mac` is used to create desktop application for `mac`

`npm run package-win` is used to create desktop application for `windowss`

`npm run package-linux` is used to create desktop application for `linux`


