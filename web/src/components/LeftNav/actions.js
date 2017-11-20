import {TOGGLE_NAV_PARENT_OPEN, ACTIVATE_CHILD_NAV} from "./actionTypes";

export const toggleNavParentOpen = (id) => {
    return {
        type: TOGGLE_NAV_PARENT_OPEN,
        id: id
    }
};

export const activateChildNav = (id) => {
    return {
        type: ACTIVATE_CHILD_NAV,
        id: id
    }
};