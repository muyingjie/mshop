const Filter = () => {
    return (
        <p className="filters">
            <Link filter="all">all</Link>
            <Link filter="completed">completed</Link>
            <Link filter="uncompleted">uncompleted</Link>
        </p>
    );
};