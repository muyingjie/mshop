import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "./Actions";

class Counter extends Component {
    render() {
        this.props.onTimeArrive();
        return (<div>信息读取中...</div>);
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