import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TodoItem from "./todoItem.js";
import {toggleTodo, removeTodo} from "../actions.js";

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                     />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "all":
            return todos;
        case "completed":
            return todos.filter(item => item.completed);
        case "uncompleted":
            return todos.filter(item => !item.completed);
        default:
            throw new Error("unsupported filter");
    }
};

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    };
};

// 为简化mapDispatchToProps里面return回来对象的重复代码，还可以通过引入bindActionCreators来简化
// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     onToggleTodo: toggleTodo,
//     onRemoveTodo: removeTodo
// }, dispatch);

// 还可以再简化：
// const mapDispatchToProps = {
//     onToggleTodo: toggleTodo,
//     onRemoveTodo: removeTodo
// };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);