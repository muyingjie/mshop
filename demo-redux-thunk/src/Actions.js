// 如果没有 redux-thunk 中间件的存在 这样一个函数类型的 action 对象被派发出来会
// 一路发送到各个 reducer 函数， reducer 函数从这些实际上是函数的 action 对象上是无法
// 获得 type 字段的，所以也做不了什么实质的处理。
// 不过，有了 redux-thunk 中间件之后，这些 action 对象根本没有机会触及到 reducer
// 函数，在中间件一层就被 redux-thunk 截获 。
// redux-thunk 的工作是检查 action 对象是不是函数，如果不是函数就放行，完成普通
// action 对象的生命周期，而如果发现 action 对象是函数，那就执行这个函数，并把 Store
// 的 dispatch 函数和 getState 函数作为参数传递到函数中去，处理过程到此为止，不会让
// 这个异步 action 对象继续往前派发到 reducer 函数。
export const increment_loading = () => ({
    type: "increment_loading"
});
export const increment_success = () => ({
    type: "increment_success"
});
export const increment_fail = () => ({
    type: "increment_fail"
});
export const incrementAsync = () => {
    return (dispatch) => {
        dispatch(increment_loading());
        // setTimeout(() => {
        //     dispatch(increment_success());
        // }, 2000);
        return fetch("/data/cityinfo/101010100.html").then((response) => {
            if (response.status !== 200) {
                throw new Error("获取天气信息失败");
            }

            response.json().then((responseJson) => {
                dispatch(increment_success());
            });
        });
    };
};