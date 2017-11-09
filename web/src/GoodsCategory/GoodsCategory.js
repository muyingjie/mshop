import React, {Component} from "react";
import {connect} from "react-redux";
import {openCatetory, closeCatetory} from "./actions";

import "./GoodsCategory.scss";

class GoodsCategory extends Component{
    constructor(props) {
        super(props);

        this.changeLinearToTree = this.changeLinearToTree.bind(this);
    }

    changeLinearToTree(ld) {
        let td = [];
        // 提取顶级分类
        ld.forEach((item) => {
            if (!item.parent_id) {
                td.push(item);
            }
        });
        ld.forEach((item) => {
            if (item.parent_id) {
                
            }
        });
        return td;
    }
    render() {
        let treeData = this.changeLinearToTree(this.props.goodsCatetoryData);
        return <div className="goods-category">
            {
                treeData.map(function(v, i) {
                    return <div className="item-wrap" key={v.id}>
                        <div className="parent clear">
                            {
                                v.children ? 
                                    <a className="btn open-identification fl" onClick={() => {
                                        this.props[v.open ? "onCloseCategory" : "onOpenCategory"](v.id);
                                    }}>
                                        {v.open ? "-" : "+"}
                                    </a> :
                                    <div className="open-identification fl"></div>
                            }
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
const mapDispatchToProps = (dispatch) => {
    return {
        onOpenCategory: (id) => {
            dispatch(openCatetory(id));
        },
        onCloseCategory: (id) => {
            dispatch(closeCatetory(id));
        }
    };
};
export default connect(mapStateToProps)(GoodsCategory);