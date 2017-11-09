import {OPEN_CATEGORY, CLOSE_CATEGORY} from "./actionTypes";

// const goodsCatetoryData = [
//     {
//         name: "顶级分类1",
//         children: [
//             {
//                 name: "一级分类1",
//                 children: [
//                     {
//                         name: "二级分类1"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "顶级分类1"
//     },
//     {
//         name: "顶级分类1"
//     }
// ];
const goodsCatetoryData = [
    {
        name: "顶级分类1",
        id: 1
    },
    {
        name: "一级分类1",
        id: 2,
        parent_id: 1
    },
    {
        name: "一级分类1",
        id: 3,
        parent_id: 1
    },
    {
        name: "一级分类1",
        id: 4,
        parent_id: 3
    },
    {
        name: "顶级分类1",
        id: 5
    },
    {
        name: "顶级分类1",
        id: 6
    }
];
let increment = 0;
addExtendField(goodsCatetoryData);
function addExtendField(data) {
    data.forEach(function(item, index) {
        // item.id = increment++;
        item.open = false;
        if (item.children && item.children.length > 0) {
            addExtendField(item.children);
        }
    });
}

export default (state = goodsCatetoryData, action) => {
    switch(action.type) {
        case OPEN_CATEGORY:
            return state.map((item) => {
                return {
                    ...item,
                    open: action.id == item.id ? !item.open : item.open
                };
            });
        default:
            return state;
    }
}