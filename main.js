const { app, BrowserWindow } = require("electron");
require('electron-reload')(__dirname);
const path = require('path')


const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "src/preload.js"),
    },
  });

  window.maximize();

  window.loadFile("index.html");

  return window;
};

app.whenReady().then(() => {
  const window = createWindow();

});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
