const isProductionMode = (process.env.NODE_ENV === "production");
const app = isProductionMode ? require("./app.prod.js") : require("./app.dev.js");

if (!isProductionMode) {
    process.env.NODE_ENV = "development";
}

const PORT = process.env.PORT || 9000;

app.listen(PORT, function() {
    console.log((isProductionMode ? "产品模式" : "开发模式") + "，端口：" + process.env.PORT);
});