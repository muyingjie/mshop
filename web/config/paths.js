var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}
console.log({
    appDist: resolveApp("dist"),
    appPublic: resolveApp("public"),
    appMain: resolveApp("src/main.js"),
    appSrc: resolveApp("src")
});
module.exports = {
    appDist: resolveApp("dist"),
    appPublic: resolveApp("public"),
    appMain: resolveApp("src/main.js"),
    appSrc: resolveApp("src")
};