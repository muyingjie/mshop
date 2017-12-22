import {OPEN_CATEGORY, CLOSE_CATEGORY} from "./actionTypes";

export default (state = [], action) => {
    switch(action.type) {
        case OPEN_CATEGORY:
            return state.map((item) => {
                return {
                    ...item,
                    open: action.id == item.id ? !item.open : item.open
                };
            });
        case CLOSE_CATEGORY:
            return state.map((item) => {
                return {
                    ...item,
                    open: action.id == item.id ? !item.open : item.open
                };
            });
        default:
            return state;
    }
}