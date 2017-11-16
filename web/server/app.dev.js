const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("../config/webpack.config.dev.js");
const renderPage = require("./Routes.server.js").renderPage;
const compiler = webpack(webpackConfig);
// 在Express服务器启动的时候，webpack-dev-middleware 根据 webpack 来编译生成打包文件，之后每次相关文件修改的时候，就会对应更新打包文件。 因为更新过程只需要重新编译更新的文件，这个速度会比启动时的完全编译过程快很多
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
});

// webpack-dev-middleware并没有将产生的打包文件存放在真实的文件系统中，而是存放在内存中的虚拟文件系统，所以要获取资源描述文件不能像产品环境那样直接require 就行，而是要读取 webpack-dev-middleware 实例中的虚拟文件系统
function getAssetManifest() {
    const content = webpackDevMiddleware.fileSystem.readFileSync(__dirname + "/../build/asset-manifest.json");
    return JSON.parse(content);
}

const app = express();

let assetManifest = null;

app.use(express.static(path.resolve(__dirname, "../build")));

app.use(webpackDevMiddleware);
// 虽然 webpack-dev-middleware 中间件能够完成实时更新打包文件，但是这只发生在服务器端，只有当浏览器刷新重新向服务器请求资源时才能得到更新的打包文件，而webpack-hot-middleware就更进一步，无需 网页刷新，能够把代码更新“推送” 到网页之中。
// webpack-hot-middleware 的工作原理是让网页建立一个 websocket 链接到服务器，服务器支持websocket的路径由path参数指定，在我们的例子中就是/_webpack_hmr。每次有代码文件发生改变就会有消息推送到网页中，网页就会发出请求获取更新的内容。
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
}));

app.get("*", (req, res) => {
    if (!assetManifest) {
        assetManifest = getAssetManifest();
    }

    return renderPage(req, res, assetManifest);
});

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.listen(PORT, function() {
    console.log("产品模式服务器已开启");
});

module.exports = app;