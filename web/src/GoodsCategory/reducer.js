const goodsCatetoryData = [
    {
        name: "顶级分类1",
        children: [
            {
                name: "一级分类1",
                children: [
                    {
                        name: "二级分类1"
                    }
                ]
            }
        ]
    },
    {
        name: "顶级分类1"
    },
    {
        name: "顶级分类1"
    }
];
let increment = 0;
addId(goodsCatetoryData);
function addId(data) {
    data.forEach(function(item, index) {
        item.id = increment++;
        if (item.children && item.children.length > 0) {
            addId(item.children);
        }
    });
}

export default (state = goodsCatetoryData, action) => {
    switch(action.type) {
        default:
            return state;
    }
}