import React, {Component} from "react";
import {Link} from "react-router";

import "./LeftNav.scss";

class LeftNav extends Component{
    constructor(prop) {
        super(prop);

        this.navConfigData = [
            {
                firstLevel: {
                    name: "订单管理",
                    isLink: true
                },
                childItems: [
                    {
                        name: "订单列表",
                        link: "/order"
                    }
                ]
            },
            {
                firstLevel: {
                    name: "商品管理",
                    isLink: false
                },
                childItems: [
                    {
                        name: "商品列表",
                        link: "/good"
                    },
                    {
                        name: "商品分类",
                        link: "/good-category"
                    },
                    {
                        name: "商品属性",
                        link: "/good-prop"
                    },
                    {
                        name: "商品规格",
                        link: "/good-specification"
                    },
                    {
                        name: "商品评价",
                        link: "/good-comment"
                    }
                ]
            }
        ];
    }

    render() {
        const navConfigData = this.navConfigData;
        return (
            <ul className="nav">
                {
                    navConfigData.map((item) => {
                        <li className="item-wrap">
                            item.firstLevel.isLink ? 
                            <Link to={item.link} className="first-level">订单列表</Link> : 
                            <a href="javascript:;" className="first-level">订单管理</a>
                        </li>
                        item.childItems.map((childItem) => {
                            <li className="item-wrap">                
                                <Link to={childItem.link} className="child-item">订单列表</Link>
                            </li>
                        })
                    })
                }
            </ul>
        );
    };

}

export default LeftNav;