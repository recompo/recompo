const path = require("path");
const glob = require("glob");

/** @type {import('webpack').Configuration} */
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
  });
  config.module.rules.push({
    test: /\.module.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: { modules: true, exportOnlyLocals: false }
      },
      "postcss-loader",
      "sass-loader"
    ]
  });
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
  });
  return config;
};
