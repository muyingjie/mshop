import {OPEN_CATEGORY, CLOSE_CATEGORY} from "./actionTypes";

export const openCategory = (id) => {
    return {
        type: OPEN_CATEGORY,
        id: id
    }
};

export const closeCategory = (id) => {
    return {
        type: CLOSE_CATEGORY,
        id: id
    }
};