import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {routerReducer} from "react-router-redux";
import {reducer as leftNavReducer} from "./LeftNav";

const reducer = combineReducers({
    routing: routerReducer,
    leftNav: leftNavReducer
});

const win = window;

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);

export default createStore(reducer);