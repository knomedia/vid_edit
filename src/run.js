const util = require('util');
const exec = util.promisify(require('child_process').exec)
const spawn = require('child_process').spawn

const run = async function (cmd, ignoreErr) {
  console.log("RUN", cmd)
  const { stdout, stderr } = await exec(cmd);
  if (stderr && !ignoreErr) {
    console.log("************************** FOUND STDERR ****************")
    console.error(stderr);
    console.log("************************** END STDERR ****************")
    process.exit(1)
  }
  return stdout.trim()
}


module.exports = run
