import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import {syncHistoryWithStore} from "react-router-redux";

import App from "./App/App.js";
import {configureStore} from "./Store.js";

const store = configureStore();
const win = global.window;

// import Order from "./Order/Order.js";
// import Goods from "./Goods/Goods.js";
// import GoodsCategory from "./GoodsCategory/GoodsCategory.js";
// import Member from "./Member/Member.js";
// import Home from "./Home/Home.js";

const createElement = (Component, props) => {
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

const getOrderPage = (nextState, callback) => {
    require.ensure([], function(require) {
        callback(null, require('./Order/Order.js').default);
    }, 'order');
};

const getGoodsPage = (nextState, callback) => {
    require.ensure([], function(require) {
        callback(null, require('./Goods/Goods.js').default);
    }, 'goods');
};

const getGoodsCategoryPage = (nextState, callback) => {
    require.ensure([], function(require) {
        callback(null, require('./GoodsCategory/GoodsCategory.js').default);
    }, 'goodsCategory');
};

const getMemberPage = (nextState, callback) => {
    require.ensure([], function(require) {
        callback(null, require('./Member/Member.js').default);
    }, 'member');
};

const getHomePage = (nextState, callback) => {
    require.ensure([], function(require) {
        callback(null, require('./Home/Home.js').default);
    }, 'home');
};

const Routes = () => (
    <Router history={browserHistory} createElement={createElement}>
        <Route path="/" component={App}>
            <IndexRoute getComponent={getHomePage} />
            <Route path="order" getComponent={getOrderPage} />

            <Route path="goods" getComponent={getGoodsPage} />
            <Route path="goods-category" getComponent={getGoodsCategoryPage} />

            <Route path="member" getComponent={getMemberPage} />

            <Route path="*" getComponent={getHomePage} />
        </Route>
    </Router>
);

export default Routes;