const fs = require("fs")

fs.copyFileSync(
  `${process.cwd()}/package.json`,
  `${process.cwd()}/dist/package.json`
)
const package = require(`${process.cwd()}/package.json`)
package.name = "recompo"
package.scripts = {}
fs.writeFileSync(`${process.cwd()}/dist/package.json`, JSON.stringify(package))
