const fs = require("fs");

const { exec } = require("child_process");

fs.watch("src", function (event, filename) {
  if (!filename || !event) return;
  console.log(`${event}: ${filename}`);
  console.log("Compiling...");
  exec("npm run build", (err, stdout, stderr) => {
    if (err) console.error(err);
    if (stderr) console.error(stderr);
    console.log("Compiled!");
  });
});
