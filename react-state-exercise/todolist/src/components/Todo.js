import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRemove() {
    this.props.remove(this.props.id);
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.edit(this.props.id, this.state.task);
    this.setState({ isEditing: !this.state.isEditing });
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleToggle() {
    this.props.toggleComplete(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form action="" onSubmit={this.handleEdit}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            className={this.props.completed ? "completed" : null}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}
