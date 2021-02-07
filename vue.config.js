const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        components: path.resolve("src/components"),
        assets: path.resolve("src/assets"),
        views: path.resolve("src/views"),
        network: path.resolve('src/network')
      },
    },
  },
  devServer: {
    port: 8000,
    open: true,
  },
};
