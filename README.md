# electron-app 😄



## *ELECTRON:* 

Electron is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining Chromium and Node.js into a single runtime and apps can be packaged for Mac, Windows, and Linux.



## *THIS APP :  Electron-Guide*

An Electron application is essentially a Node.js application. The starting point is a `package.json` that is identical to that of a `Node.js` module.


![Alt text](assets/screenshot.png?raw=true "Ankit Manchanda")

- Step 1: Installing Electron

  `npm install --save electron`

  This will install electron dependancy in your machine.

- Step 2. Create The Browser Window and load index.html

  ### `Note:`

  * `BrowserWindow()` generate an desktops application with height and width specified 
  * `loadFile()` will load the view file for the desktop application
  * `webContents.opendevTools()`open the developer tools for development purpose in desktop application.

  ### `Events:`
    There are no. of events associted with app. Some of them are listed below.
  * `ready` event fires when app loads first i.e. why createWindow() associated to it to create desktop app
  * `window-all-closed` event fires when all windows closed  i.e. why `app.quit()` is called at that time


- Step 3: Running Electron Application

  ### `electron .` 
  command is used to run electron application.

  ### *or* 

  we can update `scripts` part of our `package.json` to run it through `npm`.
  ```
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "electron ."
    }
  ```

  `npm start` use this command to run elctron application after updating `package.json`. 

- Step 4: Create Build

