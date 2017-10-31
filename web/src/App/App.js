import React, {Component} from "react";
import LeftNav from "../LeftNav/LeftNav.js";

import "./App.scss";

class App extends Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className="wrap">
                <div className="top-bar"></div>
                <div className="clear">
                    <div className="nav-wrap fl">
                        <LeftNav />
                    </div>
                    <div className="main fl">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
export default App;