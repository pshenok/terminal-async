var exec = require("child_process").exec;

function runCommand(command) {
  //return refrence to the child process
  return exec(command);
}

function getString(command, callback) {
  //return refrence to the child process
  return exec(
    command,
    (function() {
      return function(err, data, stderr) {
        if (!callback) return;

        callback(err, data, stderr);
      };
    })(callback)
  );
}

function get(command) {
  return new Promise((resolve, reject) => {
    getString(`${command}`, (err, data, stderr) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

function run(command) {
  return new Promise((resolve, reject) => {
    return resolve(runCommand(command));
  });
}

module.exports = {
  get,
  run
}


