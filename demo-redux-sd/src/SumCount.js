import React, {Component} from "react";
// import store from "./Store.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// class SumCount extends Component {
//     // 需要使用context时，要给构造函数传第二个参数
//     constructor(props, context) {
//         super(props, context);

//         this.onChange = this.onChange.bind(this);
//         this.calcSumCount = this.calcSumCount.bind(this);

//         this.state = {
//             sumCount: this.calcSumCount()
//         };
//     }

//     calcSumCount() {
//         return this.context.store.getState().reduce((prev, cur) => {
//             return prev + cur.count;
//         }, 0);
//     }

//     onChange() {
//         this.setState({
//             sumCount: this.calcSumCount()
//         });
//     }

//     componentDidMount() {
//         this.context.store.subscribe(this.onChange);
//     }

//     componentWillUnmount() {
//         this.context.store.unsubscribe(this.onChange);
//     }

//     render() {
//         const sumCount = this.state.sumCount;
//         return (
//             <div>SumCount：{sumCount}</div>
//         );
//     }
// }

// SumCount.contextTypes = {
//     store: PropTypes.object
// };

// export default SumCount;

function SumCount({sumCount}) {
    return (
        <div>SumCount：{sumCount}</div>
    );
}

function mapStateToProps(state) {
    return {
        sumCount: state.reduce((prev, cur) => {
            return prev + cur.count;
        }, 0)
    };
}

export default connect(mapStateToProps)(SumCount);