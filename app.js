const { BrowserWindow, Menu, app } = require('electron')

let url;
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/';
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  });
  const menu = Menu.buildFromTemplate(createMenuTemplate());
  Menu.setApplicationMenu(menu);
  window.loadURL(url);
})

/**
 * Creates the menu template.
 */
function createMenuTemplate() {
  const template = [{
    label: 'File',
    submenu: [{
      label: 'Exit',
      accelerator: 'Alt+F4',
      role: 'quit'
    }]
  }];

  return template;
}