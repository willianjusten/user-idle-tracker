const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "user-idle-tracker.min.js",
    libraryTarget: "umd",
    library: "UserIdleTracker"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, "example"), path.join(__dirname, "lib")]
  }
};
