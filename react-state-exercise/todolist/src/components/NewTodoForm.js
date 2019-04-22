import React, { Component } from "react";
import uuid from "uuid/v4";
export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      ...this.state,
      id: uuid(),
      completed: false
    };
    this.props.create(newTodo);
    this.setState({ task: "", id: "" });
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          name="task"
          name="task"
          placeholder="New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add New Todo</button>
      </form>
    );
  }
}
