const chokidar = require("chokidar");

const { exec } = require("child_process");

function rebuild(event, path) {
  if (!path || !event) return;
  console.log(`${event}: ${path}`);
  console.log("Compiling...");
  exec("npm run build", (err, stdout, stderr) => {
    if (err) console.error(err);
    if (stderr) console.error(stderr);
    console.log("Compiled!");
  });
}

chokidar
  .watch("src", {
    ignoreInitial: true,
  })
  .on("add", (path) => rebuild("add", path))
  .on("change", (path) => rebuild("change", path))
  .on("unlink", (path) => rebuild("unlink", path));
