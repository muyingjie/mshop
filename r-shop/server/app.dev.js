const express = require('express');
const path = require('path');

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

app.use('/api/count', (req, res) => {
  res.json({count: 100});
});


app.use('/api/GoodsCategory', (req, res) => {
  const initState = [
      {
          name: "顶级分类1",
          id: 1
      },
      {
          name: "一级分类1",
          id: 2,
          parent_id: 1
      },
      {
          name: "一级分类2",
          id: 3,
          parent_id: 1
      },
      {
          name: "二级分类1",
          id: 4,
          parent_id: 3
      },
      {
          name: "顶级分类1",
          id: 5
      },
      {
          name: "顶级分类1",
          id: 6
      }
  ];
  res.json(initState);
});

app.get('*', (req, res) => {
  if (!assetManifest) {
    assetManifest = getAssetManifest();
  }

  return renderPage(req, res, assetManifest);
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

module.exports = app;
