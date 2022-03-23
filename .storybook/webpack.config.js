const path = require("path")
const glob = require("glob")

/**
 * @param {{config:import('webpack').Configuration,mode:String}} config
 */
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.ts[x]?$/,
    use: {
      loader: "swc-loader",
      options: {
        parseMap: true,
        sourceMaps: true
      }
    }
  })
  config.module.rules.push({
    test: /\.module.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: { modules: true, importLoaders: 1 }
      },
      "postcss-loader",
      "sass-loader"
    ]
  })
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/,
    use: [
      "style-loader",
      { loader: "css-loader", options: { modules: true, importLoaders: 1 } },
      "postcss-loader",
      "sass-loader"
    ]
  })
  return config
}
