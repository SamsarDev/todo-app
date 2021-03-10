/* eslint-disable prettier/prettier */
const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set("styles", path.resolve(__dirname, "src/styles"))
    .set("api", path.resolve(__dirname, "src/api"))
    .set("img", path.resolve(__dirname, "src/assets/"));
  }
};
