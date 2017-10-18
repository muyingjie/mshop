import React, {Component} from "react";
import Counter from "./Counter.js";
import Summary from "./Summary.js";

class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Summary />
                <Counter caption="first" />
                <Counter caption="second" />
                <Counter caption="third" />
            </div>
        );
    }
}

export default ControlPanel;