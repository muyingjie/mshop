const express = require("express");
const path = require("path");
const app = express();
const assetManifest = require(path.resolve(__dirname + "../build/asset-manifest.json"));

// 对于所有 HTTP 请求，先去 static 目录下匹配静态资源。如果找不到，就会用 app.get 指定的一个默认路径处理
app.use(express.static(path.resolve(__dirname, "../build")));
app.get("*", (req, res) => {
    return res.render("index", {
        title: "sample react app",
        PUBLIC_URL: "/",
        assetManifest: assetManifest
    });
});

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

module.exports = app;