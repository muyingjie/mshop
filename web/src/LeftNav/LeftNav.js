import React, {Component} from "react";
import LeftNavItem from "./LeftNavItem";
import {connect} from "react-redux";

import "./LeftNav.scss";

class LeftNav extends Component{
    constructor(props, store) {
        super(props, store);
    }
    componentDidMount() {
        let fillHeight = this.fillHeight;
        fillHeight();
        window.addEventListener("resize", fillHeight);
    }
    fillHeight() {
        let oNav = document.getElementById("nav");
        // FF下document.body是undefined
        oNav.style.minHeight = (document.documentElement || document.body).clientHeight - 81 + "px";
    }
    render() {
        return (
            <ul className="nav" id="nav">
                {
                    this.props.navConfigData.map((item, key) => (
                        <LeftNavItem item={item} key={key} />
                    ))
                }
            </ul>
        );
    };

}

const mapStateToProps = (state) => {console.log(state);
    return {
        navConfigData: state.leftNav
    };
};

// export default LeftNav;
export default connect(mapStateToProps)(LeftNav);