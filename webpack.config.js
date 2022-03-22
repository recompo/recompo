const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.ts[x]?$/i,
        exclude: /node_modules/,
        use: ["swc-loader"],
      },
      {
        test: /\.module.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
  },
  entry: glob
    .sync("./src/**/*[!.test,.stories].{ts,tsx}")
    .reduce((acc, file) => {
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
    sourceMapFilename: "[name].js.map",
    library: "recompo",
  },
  externals: { React: "react", ReactDOM: "react-dom" },
};
