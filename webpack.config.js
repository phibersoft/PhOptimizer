const path = require("path"),
  nodeExternals = require("webpack-node-externals"),
  webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "main.ts"),
  target: "node",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
  externals: [nodeExternals()],
};
