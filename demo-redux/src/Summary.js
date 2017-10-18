import React, {Component} from "react";
import store from "./Store.js";

class Summary extends Component {
    constructor(props) {
        super(props);

        this.setSumCount = this.setSumCount.bind(this);

        this.state = {
            sumCount: this.getSumCount()
        };
    }

    getSumCount() {
        const initCountObj = store.getState();
        let initSumCount = 0;

        for (let countAttr in initCountObj) {
            initSumCount += initCountObj[countAttr];
        }
        return initSumCount;
    }

    setSumCount() {
        this.setState({
            sumCount: this.getSumCount()
        });
    }

    componentDidMount() {
        store.subscribe(this.setSumCount);
    }

    componentWillUnmount() {
        store.unsubscribe(this.setSumCount);
    }

    render() {
        let curSumCount = this.state.sumCount;
        return (
            <div>sum: {curSumCount}</div>
        );
    }
}

export default Summary;