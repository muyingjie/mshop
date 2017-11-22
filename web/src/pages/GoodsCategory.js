import React from "react";
import {view as GoodsCategory, stateKey, reducer} from "../components/GoodsCategory";

const page = () => {
    return (
        <GoodsCategory />
    );
};

const initState = () => {
    return fetch("/api/goods-category").then(response => {
        if (response.status != "200") {
            throw new Error("Fail to fetch count");
        }
        return response.json();
    });
};

export {page, reducer, initState, stateKey};