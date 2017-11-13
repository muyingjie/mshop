import React, {Component} from "react";
import {connect} from "react-redux";
import {openCategory, closeCategory} from "./actions";

import "./GoodsCategory.scss";

class GoodsCategory extends Component{
    constructor(props) {
        super(props);

        this.changeLinearToTree = this.changeLinearToTree.bind(this);
    }

    changeLinearToTree(ld) {
        let td = [];
        // 存储各节点的子节点
        let childrenOf = {};

        ld.forEach((item) => {
            let id = item.id;
            let parent_id = item.parent_id;

            childrenOf[id] = childrenOf[id] || [];
            item.children = childrenOf[id];

            if (parent_id) {
                childrenOf[parent_id] = childrenOf[parent_id] || [];
                childrenOf[parent_id].push(item);
            } else {
                td.push(item);
            }
        });
        return td;
    }
    render() {
        // 传入数据的方式，默认是线性结构，线性结构将会调用changeLinearToTree转为树形结构
        let dataform = this.props.dataform;
        let goodsCatetoryData = this.props.goodsCatetoryData;
        let treeData = dataform == "tree" ? goodsCatetoryData : this.changeLinearToTree(goodsCatetoryData);

        console.log(treeData);
        return <div className="goods-category">
            {
                treeData.map((v, i) => {
                    return <div className="item-wrap" key={v.id}>
                        <div className="parent clear">
                            {
                                v.children.length ? 
                                    <a href="javascript:;" className="btn open-identification fl" onClick={() => {
                                        this.props[v.open ? "onCloseCategory" : "onOpenCategory"](v.id);
                                    }}>
                                        {v.open ? "-" : "+"}
                                    </a> :
                                    <div className="open-identification fl"></div>
                            }
                            <a className="item fl" href="javascript:;">{v.name}</a>
                        </div>
                        <div className={v.open ? "children open" : "children"}>
                            {
                                v.children.length ? <GoodsCategory goodsCatetoryData={v.children} dataform="tree" onOpenCategory={this.props.onOpenCategory} onCloseCategory={this.props.onCloseCategory} /> : ""
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
            dispatch(openCategory(id));
        },
        onCloseCategory: (id) => {
            dispatch(closeCategory(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(GoodsCategory);