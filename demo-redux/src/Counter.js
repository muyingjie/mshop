import React, {Component} from "react";
import PropTypes from "prop-types";
import store from "./Store.js";
import * as Actions from "./Actions.js";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrementButtonClick = this.onIncrementButtonClick.bind(this);
        this.onDecrementButtonClick = this.onDecrementButtonClick.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            count: store.getState()[props.caption]
        };
    }

    onChange() {
        this.setState({
            count: store.getState()[this.props.caption]
        });
    }

    onIncrementButtonClick() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrementButtonClick() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        const caption = this.props.caption;

        return (
            <div>
                <input type="button" value="+" onClick={this.onIncrementButtonClick} />
                <input type="button" value="-" onClick={this.onDecrementButtonClick} />
                {caption} count：
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