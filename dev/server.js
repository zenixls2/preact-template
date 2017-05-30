const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
config.entry.app.unshift(
  "webpack-dev-server/client?http://localhost:9000/",
  "webpack/hot/dev-server");
config.output.publicPath = path.join(__dirname, 'src');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
config.plugins.push(new webpack.LoaderOptionsPlugin({debug: true}));

const testPort = 9000;

function startAppServer(callback) {
  const compiler = webpack(config);
  let appServer = new WebpackDevServer(compiler);
  appServer.use('/app',
    express.static(path.join(__dirname, 'src/index.html')))
  appServer.use('/asset', express.static(path.join(__dirname, 'asset')));
  appServer.listen(9000, function() {
    console.log(`App is now running on port ${testPort}`);
    console.log(`open "http://localhost:${testPort}/app" to see the result`);
    if (callback) callback();
  });
  return appServer;
}
let appServer = startAppServer();

