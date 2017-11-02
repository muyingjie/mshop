import React, {Component} from "react";
import LeftNavItem from "../LeftNavItem/LeftNavItem";

import "./LeftNav.scss";

class LeftNav extends Component{
    constructor(prop) {
        super(prop);

        this.navConfigData = [
            {
                parent: {
                    name: "订单管理",
                    link: "/order"
                },
                children: [
                    {
                        name: "订单列表",
                        link: "/order"
                    }
                ]
            },
            {
                parent: {
                    name: "商品管理",
                    link: "/good"
                },
                children: [
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
    componentDidMount() {
        let fillHeight = this.fillHeight;
        fillHeight();
        window.addEventListener("resize", fillHeight);
    }
    fillHeight() {
        let oNav = document.getElementById("nav");
        // FF下document.body是undefined
        oNav.style.minHeight = (document.documentElement || document.body).clientHeight - 81 + "px";
    }
    render() {
        return (
            <ul className="nav" id="nav">
                {
                    this.navConfigData.map((item, key) => (
                        <LeftNavItem item={item} key={key} />
                    ))
                }
            </ul>
        );
    };

}

export default LeftNav;