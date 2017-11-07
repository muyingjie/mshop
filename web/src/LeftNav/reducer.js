import {TOGGLE_NAV_PARENT_OPEN, ACTIVATE_CHILD_NAV} from "./actionTypes";

const navConfigData = [
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
    },
    {
        parent: {
            name: "会员管理",
            link: "/member"
        },
        children: [
            {
                name: "会员列表",
                link: "/good"
            }
        ]
    }
];
let rnd = 0;
// 为navConfigData中主菜单添加唯一标识
navConfigData.forEach(function(nav, index) {
    nav.parent.id = rnd++;
    nav.parent.active = false;
    nav.children.forEach(function(navChild, childIndex) {
        navChild.id = rnd++;
        navChild.active = false;
    });
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
                        active: (item.parent.id == action.id) ? !item.parent.active : item.parent.active
                    },
                    children: JSON.parse(JSON.stringify(item.children))
                }
            });
        case ACTIVATE_CHILD_NAV:
            return state.map((item) => {
                return {
                    parent: { ...item.parent },
                    children: item.children.map((item) => {
                        return {
                            ...item,
                            active: item.id == action.id
                        }
                    })
                }
            });
        default: {
            return state;
        }
    }
}