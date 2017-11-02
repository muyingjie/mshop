import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {routerReducer} from "react-router-redux";

const originalReducers = {
    routing: routerReducer
};

const reducer = combineReducers(originalReducers);

const win = window;

const middlewares = [];

const storeEnhancers = compose(
    
);