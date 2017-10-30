import React, {Component} from "react";
import LeftNav from "../LeftNav/LeftNav.js";

import "./App.scss";

const App = ({children}) => {
    return (
        <div className="wrap">
            <div className="top-bar"></div>
            <div>
                <div className="nav-wrap fl">
                    <LeftNav />
                </div>
                <div className="main fl">{children}</div>
            </div>
        </div>
    );
};
export default App;