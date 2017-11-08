import React, {Component} from "react";
import {connect} from "react-redux";

import "./GoodsCategory.scss";

class GoodsCategory extends Component{
    render() {
        let treeData = this.props.goodsCatetoryData;
        return <div className="goods-category">
            {
                treeData.map(function(v, i) {
                    return <div className="item-wrap" key={v.id}>
                        <div className="parent clear">
                            <a className="open-identification fl">+</a>
                            <a className="item fl" href="javascript:;">{v.name}</a>
                        </div>
                        <div className="children">
                            {
                                v.children ? <GoodsCategory goodsCatetoryData={v.children} /> : ""
                            }
                        </div>
                    </div>
                })
            }
        </div>;
    }
}
const mapStateToProps = (state) => {
    return {
        goodsCatetoryData: state.goodsCategory
    };
};
export default connect(mapStateToProps)(GoodsCategory);