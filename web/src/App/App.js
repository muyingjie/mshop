import React, {Component} from "react";
import {LeftNav} from "../LeftNav/LeftNav.js";

const App = ({children}) => {
    return (
        <div>
            <LeftNav />
            <div>{children}</div>
        </div>
    );
};
export default App;