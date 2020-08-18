const {
    Menu
} = require('electron')

const configure = () => {

    const fileMenu = {
        label: 'File',
        submenu: [{
            role: 'quit'
        }]
    }

    const editMenu = {
        label: 'Edit',
        submenu: [{
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            ...([{
                    role: 'delete'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'selectAll'
                }
            ])
        ]
    }

    const viewMenu = {
        label: 'View',
        submenu: [{
                role: 'reload'
            },
            {
                role: 'forcereload'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    }

    const windowMenu = {
        label: 'Window',
        submenu: [{
                role: 'minimize'
            },
            {
                role: 'zoom'
            },
            ...([{
                role: 'close'
            }])
        ]
    }

    const helpMenu = {
        role: 'help',
        submenu: [{
            label: 'Know More',
            click: async () => {
                const {
                    shell
                } = require('electron')
                await shell.openExternal('https://github.com/ankitmanchandaa')
            }
        }]
    }

    const template = [fileMenu, editMenu, viewMenu, windowMenu, helpMenu]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}


exports.configure = configure
