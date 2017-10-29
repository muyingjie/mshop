import React, {Component} from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import App from "./App/App.js";
import Order from "./Order/Order.js";
import Good from "./Good/Good.js";
import Member from "./Member/Member.js";
import Home from "./Home/Home.js";

const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="order" component={Order} />
            <Route path="good" component={Good} />
            <Route path="member" component={Member} />
        </Route>
    </Router>
);

export default Routes;