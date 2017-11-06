import React, {Component} from "react";
import {Link} from "react-router";
import {spring, Motion} from "react-motion";
import {toggleNavParentOpen} from "./actions";
import {connect} from "react-redux";

class LeftNavItem extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.item;console.log(item);
        let rowH = 30;
        let startH = item.parent.open ? rowH :(item.children.length + 1) * rowH;
        let dstH = item.parent.open ? (item.children.length + 1) * rowH : rowH;

        return (
            <li className="item-wrap">
                <Motion defaultStyle={{height: startH}} style={{height: spring(dstH)}}>
                    {
                        value => <dl className="content-wrap" style={{height: value.height + "px"}}>
                            <dt onClick={() => this.props.onNavParentClick(item.parent.id)}><Link to={item.parent.link} className="first-level">{item.parent.name}</Link></dt>
                            {
                                item.children.map((childItem, childKey) => (
                                    <dd key={childKey}><Link to={childItem.link} className="child-item">{childItem.name}</Link></dd>
                                ))
                            }
                        </dl>
                    }
                </Motion>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNavParentClick: (id) => {
            dispatch(toggleNavParentOpen(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(LeftNavItem);