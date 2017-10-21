import React, {Component} from "react";
import SumCount from "./SumCount";
import CountList from "./CountList";

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <SumCount />
                <CountList />
            </div>
        );
    }
}

export default ControlPanel;