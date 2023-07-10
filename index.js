const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname);
const path = require("path");

const createWindow = () => {
  const windowInstance = new BrowserWindow({
    webPreferences: {
      center: true,
      title: "JPTV",
      useContentSize: true,
      preload: path.join(__dirname, "src/preload/context.js"),
    },
  });

  windowInstance.setBackgroundColor("#131313");
  windowInstance.loadFile("./visor/index.html");
  windowInstance.removeMenu();
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
