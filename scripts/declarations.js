const glob = require("glob");
const fs = require("fs");
const { execSync } = require("child_process");

execSync("tsc");
const components = glob.sync("./dist/components/**/*.d.ts").map((file) => file);
components.forEach((file) =>
  fs.renameSync(file, file.replace(/components\//, ""))
);
fs.rmSync("./dist/components", { recursive: true, force: true });
