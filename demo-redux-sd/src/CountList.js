import React, {Component} from "react";
import PropTypes from "prop-types";
// import store from "./Store";
import Count from "./Count";

class CountList extends Component {
    render() {
        const aCounterData = this.context.store.getState();
        return (
            <ul>
                {
                    aCounterData.map((item, i) => {
                        return <Count item={item} key={i} />;
                    })
                }
            </ul>
        );
    }
}

CountList.contextTypes = {
    store: PropTypes.object
};

export default CountList;