const path = require("path")
const glob = require("glob")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      experimentalUseImportModule: false
    })
  ],
  // do not split the css.
  optimization: {
    splitChunks: {
      cacheGroups: {
        style: {
          type: "css/mini-extract",
          name: "style",
          chunks: () => true,
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
              modules: {
                localIdentName: "foo__[name]__[local]"
              }
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
              modules: {
                localIdentName: "foo__[name]__[local]"
              }
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
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    libraryTarget: "umd",
    library: {
      type: "umd",
      name: "[name]"
    },
    globalObject: "globalThis"
  },
  externals: { react: "react", "react-dom": "react-dom" }
}
