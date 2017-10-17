import React, {Component} from "react";
import PropTypes from "prop-types";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrementButtonClick = this.onIncrementButtonClick.bind(this);
        this.onDecrementButtonClick = this.onDecrementButtonClick.bind(this);

        this.state = {
            count: props.count
        };
    }

    onIncrementButtonClick() {
        this.updateCount("increment");
    }

    onDecrementButtonClick() {
        this.updateCount("decrement");
    }

    updateCount(operate) {
        let prevCount = this.state.count;
        let newCount = 
            operate === "increment" ? prevCount + 1 : 
            operate === "decrement" ? (prevCount <= 1 ? 0 : prevCount - 1) : 0;
        
        this.setState({
            count: newCount
        });

        this.props.onUpdate(prevCount, newCount);
    }

    render() {
        return (
            <div>
                <input type="button" value="+" onClick={this.onIncrementButtonClick} />
                <input type="button" value="-" onClick={this.onDecrementButtonClick} />
                {this.props.caption} count：
                {this.state.count}
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    count: PropTypes.number,
    onUpdate: PropTypes.func
};
Counter.defaultProps = {
    count: 0,
    onUpdate: f => f
};

export default Counter;