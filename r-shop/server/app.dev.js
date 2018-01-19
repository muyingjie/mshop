const express = require('express');
const path = require('path');
const request = require('request');

const host = "localhost";

const renderPage = require('./routes.Server.js').renderPage;

const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.dev.js');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  });

function getAssetManifest() {
  const content = webpackDevMiddleware.fileSystem.readFileSync(__dirname + '/../build/asset-manifest.json');
  return JSON.parse(content);
}

const app = express();

let assetManifest = null;

app.use(express.static(path.resolve(__dirname, '../build')));

app.use(webpackDevMiddleware);
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use('/', (req, res) => {
  var aPathSections = req.path.substring(1).split('/');
  var reqType = aPathSections[0];
  var model = aPathSections[1];
  var controller = aPathSections[2];
  var action = aPathSections[3];

  if (req.path == '/favicon.ico') {
    res.end();
    return;
  }

  switch(reqType) {
    case 'service':
      // 建立http客户端发起请求
      createRequestClient(aPathSections, model, controller, action).then(function(data) {
        res.send(data);
      });
      break;
    case 'page':
    case 'css':
    case 'js':
    case 'img':
    case 'views':
      console.log('static resource route', req.path);
      break;
    default:
      console.log('default', req.path);
      res.status(404).end();
  }
});

function createRequestClient(aPath, model, controller, action) {
  
}

app.get('*', (req, res) => {
  if (!assetManifest) {
    assetManifest = getAssetManifest();
  }

  return renderPage(req, res, assetManifest);
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

module.exports = app;
