import React, {Component} from "react";
// import store from "./Store";
import PropTypes from "prop-types";
import * as Actions from "./Actions";
import {connect} from "react-redux";

// class Count extends Component{
//     constructor(props) {
//         super(props);
//         this.caption = this.props.item.caption;

//         this.onIncrement = this.onIncrement.bind(this);
//         this.onDecrement = this.onDecrement.bind(this);
//         this.onChange = this.onChange.bind(this);

//         this.state = this.props.item;
//     }

//     onChange() {
//         this.context.store.getState().forEach((item, i) => {
//             if (item.caption == this.caption) {
//                 this.setState({
//                     count: item.count
//                 });
//             }
//         });
//     }

//     onIncrement() {
//         this.context.store.dispatch(Actions.increment(this.state));
//     }

//     onDecrement() {
//         this.context.store.dispatch(Actions.decrement(this.state));
//     }

//     componentDidMount() {
//         this.context.store.subscribe(this.onChange);
//     }

//     componentWillUnmount() {
//         this.context.store.unsubscribe(this.onChange);
//     }

//     render() {
//         const count = this.state.count;
//         return (
//             <div>
//                 <input type="button" value="+" onClick={this.onIncrement} />
//                 <input type="button" value="-" onClick={this.onDecrement} />
//                 <span>{this.caption} : {count}</span>
//             </div>
//         );
//     }
// }

// Count.contextTypes = {
//     store: PropTypes.object
// };

// export default Count;

// ==================采用react-redux库====================
// 内层展示组件
function Counter({caption, onIncrement, onDecrement, count}) {
    return (
        <div>
            <input type="button" value="+" onClick={onIncrement} />
            <input type="button" value="-" onClick={onDecrement} />
            <span>{caption} : {count}</span>
        </div>
    );
}
// 将store上的状态转化为内层组件的props
function mapStateToProps(state, ownProps) {
    var count = state.find( (item) => item.caption === ownProps.item.caption ).count;
    return { count };
}
// 内层傻瓜组件中的用户动作转化为派送给 Store 的动作
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps));
        }
    };
}

// 这行本质上还是返回了外层容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter);