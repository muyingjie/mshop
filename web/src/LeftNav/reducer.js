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
    }
]

export default (state = navConfigData, action) => {
    switch(action.type) {        
        default: {
            return state;
        }
    }
}