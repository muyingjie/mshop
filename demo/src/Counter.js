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
        this.setState({
            count: this.state.count + 1
        });
    }

    onDecrementButtonClick() {
        let curCount = this.state.count - 1;
        this.setState({
            count: curCount < 0 ? 0 : curCount
        });
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
    count: PropTypes.number
};

export default Counter;