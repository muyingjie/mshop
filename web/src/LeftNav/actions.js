import {TOGGLE_NAV_PARENT_OPEN} from "./actionTypes";

export const toggleNavParentOpen = (id) => {
    return {
        type: TOGGLE_NAV_PARENT_OPEN,
        id: id
    }
};