import React, {Component} from "react";
import {Link} from "react-router";
import {spring, Motion} from "react-motion";
import {toggleNavParentOpen, activateChildNav} from "./actions";
import {connect} from "react-redux";

class LeftNavItem extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.item;
        let rowH = 30;
        let startH = item.parent.active ? (item.children.length + 1) * rowH : rowH;
        let dstH = item.parent.active ? rowH : (item.children.length + 1) * rowH;

        return (
            <li className="item-wrap">
                <Motion defaultStyle={{height: startH}} style={{height: spring(dstH)}}>
                    {
                        value => <dl className="content-wrap" style={value}>
                            <dt onClick={() => this.props.onNavParentClick(item.parent.id)}><Link to={item.parent.link} className="first-level">{item.parent.name}</Link></dt>
                            {
                                item.children.map((childItem, childKey) => (
                                    <dd 
                                        key={childKey} 
                                        className={(childItem.active ? "active" : "") + " child-item"}
                                        onClick={() => this.props.onNavChildClick(childItem.id)}>
                                        <Link to={childItem.link}>{childItem.name}</Link>
                                    </dd>
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
        },
        onNavChildClick: (id) => {
            dispatch(activateChildNav(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(LeftNavItem);