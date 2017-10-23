import React, {Component} from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {addTodo} from "../actions.js";

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);

        this.refInput = this.refInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    refInput(node) {
        this.input = node;
    }

    onInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onSubmit(ev) {
        ev.preventDefault();

        // const input = this.input;
        // if (!input.value.trim()) {
        //     return;
        // }
        // this.props.onAdd(input.value);
        // input.value = "";

        const inputValue = this.state.value;
        if (!inputValue.trim()) {
            return;
        }
        this.props.onAdd(inputValue);
        this.setState({
            value: ""
        });
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    {/* 使用ref的做法 
                    <input className="new-todo" ref={this.refInput} /> */}
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        );
    }
}

AddTodo.PropTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddTodo);