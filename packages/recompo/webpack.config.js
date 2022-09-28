/**@type {import('webpack').Configuration} */
const glob = require("glob")
const config = require("@recompo/config/webpack-preset")

config.entry = glob
  .sync("./src/**/*[!.test,.stories].{ts,tsx}")
  .reduce((acc, file) => {
    const name = file
      .replace(/^\.\/src\//, "")
      .replace(/components\//, "")
      .split(".")[0]
    acc[name] = file
    return acc
  }, {})
module.exports = config
