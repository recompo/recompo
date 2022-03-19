const path = require("path");
const fs = require("fs");
const glob = require("glob");

/** @type {import('webpack').Configuration} */
module.exports = {
  module: {
    rules: [
      {
        test: /\.ts[x]?$/i,
        loader: "swc-loader"
      },
      {
        test: /\.module.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, exportOnlyLocals: false }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"]
  },
  entry: glob.sync("./src/components/**/*.{ts,tsx}").reduce((acc, file) => {
    const name = file
      .replace(/^\.\/src\//, "")
      .replace(/components\//, "")
      .split(".")[0];
    acc[name] = file;
    return acc;
  }, {}),

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    sourceMapFilename: "[name].js.map"
  },
  externals: ["react"]
};
