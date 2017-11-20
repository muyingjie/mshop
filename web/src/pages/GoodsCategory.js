import React from "react";
import {view as GoodsCategory, stateKey, reducer} from "../components/GoodsCategory";

const page = () => {
    return (
        <GoodsCategory />
    );
};

export {page, reducer, initialState, stateKey};