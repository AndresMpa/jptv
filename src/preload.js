const { dialog } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});

const openVideo = document.querySelector("#openVideo");
openVideo.addEventListener("click", () => {
  dialog
    .showOpenDialog({
      filters: [{ name: "Movies", extensions: ["mkv", "avi", "mp4"] }],
      properties: ["openFile", "multiSelections"],
    })
    .then((res) => {
      console.log(res.filePaths);
    })
    .catch((error) => {
      console.log(error);
    });
});
