const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");


module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react",
    projectName: "app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    entry: "./src/singleSpaApp.js",
    output: {
      filename: "react-app.js",
      libraryTarget: "system",
      uniqueName: "react-app",
      devtoolNamespace: "react-app",
      library: "react-app",
      publicPath: "",
    },
    externals: ["axios"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
