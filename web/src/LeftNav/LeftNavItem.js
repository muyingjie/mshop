import React, {Component} from "react";
import {Link} from "react-router";
import {spring, Motion} from "react-motion";

class LeftNavItem extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.tabNavOpen = this.tabNavOpen.bind(this);
    }

    tabNavOpen() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let item = this.props.item;
        let rowH = 30;
        let startH = this.state.open ? (this.props.item.children.length + 1) * rowH : rowH;;
        let dstH = this.state.open ? rowH : (this.props.item.children.length + 1) * rowH;

        return (
            <li className="item-wrap">
                <Motion defaultStyle={{height: startH}} style={{height: spring(dstH)}}>
                    {
                        value => <dl className="content-wrap" style={{height: value.height + "px"}}>
                            <dt onClick={this.tabNavOpen}><Link to={item.parent.link} className="first-level">{item.parent.name}</Link></dt>
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

export default LeftNavItem;