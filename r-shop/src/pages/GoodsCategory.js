import React from 'react';
import {view as GoodsCategory, stateKey, reducer} from '../components/GoodsCategory';

const page = () => {
  return (
    <GoodsCategory />
  );
};
const initState = [
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
        name: "一级分类2",
        id: 3,
        parent_id: 1
    },
    {
        name: "二级分类1",
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
addExtendField(initState);
function addExtendField(data) {
    data.forEach(function(item, index) {
        item.open = false;
        if (item.children && item.children.length > 0) {
            addExtendField(item.children);
        }
    });
}
export {page, reducer, initState, stateKey};
