const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer: {
    port: 8000
  },
  configureWebpack: {
    resolve: {
      // 目录别名：必须以斜线开始和结束
      alias: {
        "@": path.resolve(__dirname, "src"),
        "microapps": path.resolve(__dirname, "microapps"),
      }
    },
    plugins: [
      // new SystemJSPublicPathWebpackPlugin({
      //   // optional: defaults to 1
      //   // If you need the webpack public path to "chop off" some of the directories in the current module's url, you can specify a "root directory level". Note that the root directory level is read from right-to-left, with `1` indicating "current directory" and `2` indicating "up one directory":
      //   rootDirectoryLevel: 1,

      //   // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
      //   systemjsModuleName: "react-app"
      // })
    ]
  }
})
