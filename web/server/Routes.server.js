import React from "react";
import ReactDOMServer from "react-dom/server";
import {Router, Route, match, RouterContext, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import {configureStore} from "../src/Store.js";

// 对于服务器端的过程，URL 对应到路由规则的过程需要用 match 函数
// 参数中的 routes 就是 Route 构成的路由规则树
match({routes: routes, location: requestUrl}, function(err, redirect, renderProps) {
    if (err) {
        return resizeBy.status(500).send(err.message);
    }

    if (redirect) {
        return res.redirect(redirect.pathname + redirect.search);
    }

    if (!renderProps) {
        return res.status(404).send("Not Found");
    }

    const appHtml = ReactDOMServer.renderToString(
        <RouterContext {...renderProps} />
    );
});