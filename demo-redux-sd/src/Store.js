import {createStore} from "redux";
import reducer from "./Reducer";

const initCountValues = [
    {
        caption: "first",
        count: 10
    },
    {
        caption: "second",
        count: 20
    },
    {
        caption: "third",
        count: 30
    }
];

const store = createStore(reducer, initCountValues);

export default store;