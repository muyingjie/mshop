import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as actions from "./Actions";

class Counter extends Component {
    componentDidMount() {
        this.props.onTimeArrive();
    }

    render() {
        const status = this.props.status;
        switch(status) {
            case "increment_loading":
                return (<div>信息读取中...</div>);
            case "increment_success":
                return (<div>读取完毕</div>);
            default:
                return (<div>异常</div>);
        }
    }
};

const mapStateToProps = (state) => {
    return {
        status: state.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTimeArrive: () => {
            dispatch(actions.incrementAsync());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;