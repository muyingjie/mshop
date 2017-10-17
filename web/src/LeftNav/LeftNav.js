import React, {Component} from "react";
import {Link} from "react-router";

// class LeftNav extends Component{
//     render() {
//         return (
//             <ul>
//                 <li><Link to="/order">订单管理</Link></li>
//                 <li><Link to="/good">商品管理</Link></li>
//                 <li><Link to="/member">会员管理</Link></li>
//             </ul>
//         );
//     }
// }

// export default LeftNav;

const LeftNav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/order">订单管理</Link></li>
                <li><Link to="/good">商品管理</Link></li>
                <li><Link to="/member">会员管理</Link></li>
            </ul>
        </div>
    );
};

export {LeftNav};