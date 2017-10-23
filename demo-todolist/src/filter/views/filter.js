import React from "react";
import Link from "./link";

const Filters = () => {
    return (
        <div className="filters">
            <Link filter="all">all</Link>
            <Link filter="completed">completed</Link>
            <Link filter="uncompleted">uncompleted</Link>
        </div>
    );
};

export default Filters;