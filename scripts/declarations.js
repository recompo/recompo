#!/usr/bin/env node
const startTime = Date.now()
const glob = require("glob")
const fs = require("fs")
const { execSync } = require("child_process")

console.log("Generating type declarations...")
execSync("tsc")
const components = glob.sync("./dist/components/**/*.d.ts").map((file) => file)
components.forEach((file) =>
  fs.renameSync(file, file.replace(/components\//, ""))
)
fs.rmSync("./dist/components", { recursive: true, force: true })
console.log(
  `Finished generating type declarations in ${Date.now() - startTime} ms`
)
