const RESET_ACTION_TYPE = "@@RESET";

const resetReducerCreator = (reducer, resetState) => (state, action) => {
    if (action.type === RESET_ACTION_TYPE) {
        return resetState;
    } else {
        return reducer(state, action);
    }
};

// Store Enhancer是一个函数，这个函数接受一个 createStore 模样的函数为参数，返回一个新的createStore函数 
const reset = (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);

    const reset = (resetReducer, resetState) => {
        const newReducer = resetReducerCreator(resetReducer, resetState);
        store.replaceReducer(newReducer);
        // 即使是 Store Enhancer ，也无法打破 Redux 内在的一些限制，比如对 state ，增强器也不可能直接去修改 state 的值，依然只能通过派发一个 action 对象去完成。
        store.dispatch({
            type: RESET_ACTION_TYPE,
            state: resetState
        });
    };

    return {
        ...store,
        reset
    };
};

export default reset;