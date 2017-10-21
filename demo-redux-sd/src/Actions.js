import * as ActionTypes from "./ActionTypes";

export const increment = (countInfo) => {
    return {
        type: ActionTypes.INCREMENT,
        countInfo: countInfo
    };
};

export const decrement = (countInfo) => {
    return {
        type: ActionTypes.DECREMENT,
        countInfo: countInfo
    };
};