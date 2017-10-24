import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from "./Reducer";

const middlewares = [thunkMiddleware];
const win = window;

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);

export default createStore(reducer, {}, storeEnhancers);
