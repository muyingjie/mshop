import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {routerReducer} from "react-router-redux";
import resetEnhancer from "./enhancer/reset";
// import {reducer as leftNavReducer} from "./LeftNav";
// import {reducer as GoodsCategory} from "./GoodsCategory";

const originalReducers = {
    routing: routerReducer,
    // leftNav: leftNavReducer,
    // goodsCategory: GoodsCategory
};
const reducer = combineReducers(originalReducers);

// const win = window;
const win = global.window;

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
    resetEnhancer,
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);

const initialState = {};
const store = createStore(reducer, initialState, storeEnhancers);
// 每次跳转到新的页面更改reducer对象时，必须要将原有的reducers包含进去，原有的reducers就通过下面的_reducers来获取
store._reducers = originalReducers;

export default store;