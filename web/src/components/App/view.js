import React, {Component} from "react";
import LeftNav from "../LeftNav/LeftNav.js";
import {Link, browserHistory} from "react-router";
import {connect} from "react-redux";

import "./view.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let activeName = this.props.activeInfo.name;
        return (
            <div className="wrap">
                <div className="top-bar">
                    <Link to="/" className="logo">Logo</Link>
                </div>
                <div className="clear">
                    <div className="nav-wrap fl">
                        <LeftNav />
                    </div>
                    <div className="main bd fl">
                        <div className="title-back clear">
                            <a href="javascript:;" className="back fl">←</a>
                            <h2 className="title fl">{activeName}</h2>
                        </div>
                        <div className="content">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    let activeChildItem = {
        name: "首页",
        link: "/"
    };
    let leftNav = state.leftNav;
    let isFoundActiveChild = false;
    let currentPath = browserHistory.getCurrentLocation().pathname;
    leftNav.forEach((item, index) => {
        item.children.forEach((child, childIndex) => {
            // 如果点了左侧导航某项，或者刚加载时与当前url匹配的都需要设置导航
            if (child.active || currentPath == child.link) {
                activeChildItem = child;
                isFoundActiveChild = true;
                return false;
            }
        });
        return !isFoundActiveChild;
    });
    return {
        activeInfo: activeChildItem
    };
}
export default connect(mapStateToProps)(App);