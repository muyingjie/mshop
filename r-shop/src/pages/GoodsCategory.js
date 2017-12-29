import React from 'react';
import {view as GoodsCategory, stateKey, reducer} from '../components/GoodsCategory';

const page = () => {
  return (
    <GoodsCategory />
  );
};

const END_POINT = process.env.HOST_NAME || 'localhost:9000';

const initState = () => {
  return fetch(`http://${END_POINT}/api/GoodsCategory`).then(response => {
    if (response.status !== 200) {
      throw new Error('Fail to fetch count');
    }
    return response.json();
  }).then(responseJson => {
    console.log('GoodsCategory', responseJson);
    addExtendField(responseJson);
    return responseJson;
  });
}

function addExtendField(data) {
    data.forEach(function(item, index) {
        item.open = false;
        if (item.children && item.children.length > 0) {
            addExtendField(item.children);
        }
    });
}
export {page, reducer, initState, stateKey};
