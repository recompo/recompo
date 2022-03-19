const path = require("path");
const glob = require("glob");

/** @type {import('webpack').Configuration} */
module.exports = {
  module: {
    rules: [
      {
        test: /\.ts[x]?$/i,
        exclude: /node_modules/,
        use: ["swc-loader"]
      },
      {
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
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"]
  },
  entry: glob
    .sync("./src/[!stories,__tests__]**/*.{ts,tsx}")
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
    sourceMapFilename: "[name].js.map"
  },
  plugins: [],
  externals: ["react"]
};
