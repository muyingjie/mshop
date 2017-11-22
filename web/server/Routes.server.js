import React from "react";
import ReactDOMServer from "react-dom/server";
import {Router, Route, match, RouterContext, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import {configureStore} from "../src/Store.js";

import App from "../src/pages/App.js";
import Home from "../src/pages/Home.js";
import Order from "../src/pages/Order.js";
import Goods from "../src/pages/Goods.js";
import {page as GoodsCategory, reducer, stateKey, initState} from "../src/pages/GoodsCategory.js";
import NotFound from "../src/pages/NotFound.js";

const Routes = () => (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="order" component={Order} />

        <Route path="goods" component={Goods} />
        <Route path="goods-category" component={GoodsCategory} />

        <Route path="member" component={getMemberPage} />

        <Route path="*" component={NotFound} />
    </Route>
);

const pathInitData = {
    "/api/goods-category": {
        stateKey,
        reducer,
        initState
    }
};

function safeJSONstringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

function renderMatchedPage(req, res, renderProps, assetManifest) {
    const store = configureStore();
    const path = renderProps.location.pathname;
    const pathInfo = pathInitData[path] || {};
    const {stateKey, reducer, initState} = pathInfo;
    const statePromise = initState ? initState() : Promise.resolve(null);

    statePromise.then((result) => {
        if (stateKey) {
            const state = store.getState();
            store.reset(combineReducers({
                ...store._reducers,
                [stateKey]: reducer
            }), {
                ...state,
                [stateKey]: result
            });
        }

        const appHtml = ReactDOMServer.renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );

        const dehydratedState = store.getState();

        return res.render("index", {
            title: "myjshop",
            PUBLIC_URL: "/",
            assetManifest: assetManifest,
            appHtml: appHtml,
            dehydratedState: safeJSONstringify(dehydratedState)
        });
    });
}

// 对于服务器端的过程，URL 对应到路由规则的过程需要用 match 函数
// 参数中的 routes 就是 Route 构成的路由规则树
export const renderPage = (req, res, assetManifest) => {
    match({routes: routes, location: req.url}, function(err, redirect, renderProps) {
        if (err) {
            return res.status(500).send(err.message);
        }

        if (redirect) {
            return res.redirect(redirect.pathname + redirect.search);
        }

        if (!renderProps) {
            return res.status(404).send("Not Found");
        }

        return renderMatchedPage(req, res, renderProps, assetManifest);
    });
}