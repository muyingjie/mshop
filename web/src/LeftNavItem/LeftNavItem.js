import React, {Component} from "react";
import {Link} from "react-router";
import Animate from "rc-animate";

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
        let style = {
            height: (this.state.open ? (this.props.item.children.length + 1) * 30 : 30) + "px"
        };
        return (
            <li className="item-wrap">
                <Animate>
                    <dl className="content-wrap" style={style}>
                        <dt onClick={this.tabNavOpen}><Link to={item.parent.link} className="first-level">{item.parent.name}</Link></dt>
                        {
                            item.children.map((childItem, childKey) => (
                                <dd key={childKey}><Link to={childItem.link} className="child-item">{childItem.name}</Link></dd>
                            ))
                        }
                    </dl>
                </Animate>
            </li>
        );
    }
}

export default LeftNavItem;