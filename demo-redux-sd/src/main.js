import React from "react";
import ReactDOM from "react-dom";
import ControlPanel from "./ControlPanel.js";
import store from "./Store";
// import Provider from "./Provider";
// 在引入react-redux库之后就可以从该库中直接导入Provider了
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById("root")
);