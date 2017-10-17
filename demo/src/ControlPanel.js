import React, {Component} from "react";
import Counter from "./Counter.js";

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <Counter count={10} caption="first" />
                <Counter count={2} caption="second" />
                <Counter count={5} caption="third" />
            </div>
        );
    }
}

export default ControlPanel;