const fs = require("fs")

fs.copyFileSync("README.md", "dist/README.md")
fs.copyFileSync("LICENSE", "dist/LICENSE")
fs.copyFileSync("package.json", "dist/package.json")
