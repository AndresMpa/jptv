const { contextBridge } = require("electron");

exports.getEnvContext = () => {
  contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  });
};
