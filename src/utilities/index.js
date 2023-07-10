const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

/**
 Execute any command
*/
const getBashCommand = async (command) => {
  const { stdout, stderr } = await exec(command);

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  return stdout;
};

/**
 Returns screen resolution for systems based on X
*/
const getScreenResolution = async () => {
  const screenResolution = [
    "xrandr | grep '*+' | awk '/[0-9]/ {print $1}' | cut -d 'x' -f 1",
    "xrandr | grep '*+' | awk '/[0-9]/ {print $1}' | cut -d 'x' -f 2-",
  ];
  const width = parseInt(await getBashCommand(screenResolution[0]));
  const height = parseInt(await getBashCommand(screenResolution[1]));

  return [width, height];
};
