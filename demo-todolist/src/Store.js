import {createStore, combineReducers} from "redux";
import {reducer as todoReducer} from "./todos";
import {reducer as filterReducer} from "./filter";

// 参数中每个key对应了state状态上的字段名
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);

// const middlewares = [];
// if (process.env.NODE_ENV !== "production") {
//     middlewares.push(require("redux-immutable-state-invariant")());
// }

// const storeEnhancers = compose(
//     applyMiddleware(...middlewares),
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
// );

// export default createStore(reducer, {}, storeEnhancers);