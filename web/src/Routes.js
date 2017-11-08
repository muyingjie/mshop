import React, {Component} from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import App from "./App/App.js";
import Order from "./Order/Order.js";
import Goods from "./Goods/Goods.js";
import GoodsCategory from "./GoodsCategory/GoodsCategory.js";
import Member from "./Member/Member.js";
import Home from "./Home/Home.js";

const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="order" component={Order} />

            <Route path="goods" component={Goods} />
            <Route path="goods-category" component={GoodsCategory} />

            <Route path="member" component={Member} />

            <Route path="*" component={Home} />
        </Route>
    </Router>
);

export default Routes;