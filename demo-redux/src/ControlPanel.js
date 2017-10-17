import React, {Component} from "react";
import Counter from "./Counter.js";

class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            sum: 17
        };
    }

    onUpdate(prevCount, newCount) {console.log(prevCount, newCount);
        let curSum = this.state.sum;
        if (prevCount === newCount) return;
        this.setState({
            sum: prevCount < newCount ? curSum + 1 : curSum - 1
        });
    }

    render() {
        return (
            <div>
                <div>sum：{this.state.sum}</div>
                <Counter count={10} caption="first" onUpdate={this.onUpdate} />
                <Counter count={2} caption="second" onUpdate={this.onUpdate} />
                <Counter count={5} caption="third" onUpdate={this.onUpdate} />
            </div>
        );
    }
}

export default ControlPanel;