import {TOGGLE_NAV_PARENT_OPEN} from "./actionTypes";

const navConfigData = [
    {
        parent: {
            name: "订单管理",
            link: "/order",
            open: false
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
            link: "/good",
            open: false
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
    },
    {
        parent: {
            name: "会员管理",
            link: "/member",
            open: false
        },
        children: [
            {
                name: "会员列表",
                link: "/good"
            }
        ]
    }
];
// 为navConfigData中主菜单添加唯一标识
navConfigData.forEach(function(nav, index) {
    nav.parent.id = index;
});


export default (state = navConfigData, action) => {
    switch(action.type) {
        case TOGGLE_NAV_PARENT_OPEN:
            return state.map((item) => {
                return {
                    parent: {
                        id: item.parent.id,
                        name: item.parent.name,
                        link: item.parent.link,
                        open: (item.parent.id == action.id) ? !item.parent.open : item.parent.open
                    },
                    children: JSON.parse(JSON.stringify(item.children))
                }
            });
        default: {
            return state;
        }
    }
}