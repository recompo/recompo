const path = require("path")
const glob = require("glob")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  // do not split the css.
  optimization: {
    splitChunks: {
      cacheGroups: {
        style: {
          type: "css/mini-extract",
          name: "style",
          chunks: (chunk) => true,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/i,
        exclude: /node_modules/,
        use: ["swc-loader"]
      },
      {
        test: /\.module.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"]
  },
  entry: glob
    .sync("./src/**/*[!.test,.stories].{ts,tsx}")
    .reduce((acc, file) => {
      const name = file
        .replace(/^\.\/src\//, "")
        .replace(/components\//, "")
        .split(".")[0]
      acc[name] = file
      return acc
    }, {}),

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    library: { name: "recompo", type: "umd" }
  },
  externals: { react: "react", "react-dom": "react-dom" }
}
