import * as ActionTypes from "./ActionTypes";

export default (state, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state.map((item) => {
                return (item.caption === action.countInfo.item.caption) ? {
                    ...item,
                    count: item.count + 1
                } : {
                    ...item
                };
            });
        case ActionTypes.DECREMENT:
            return state.map((item) => {
                return (item.caption === action.countInfo.item.caption) ? {
                    ...item,
                    count: item.count - 1
                } : {
                    ...item
                };
            });
        default:
            return state;
    }
};