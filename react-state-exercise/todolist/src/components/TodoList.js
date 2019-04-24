import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  edit(id, update) {
    const result = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: update };
      }
      return todo;
    });
    this.setState({ todos: result });
  }
  toggleComplete(id) {
    const result = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    this.setState({ todos: result });
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        {...todo}
        remove={this.remove}
        edit={this.edit}
        toggleComplete={this.toggleComplete}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List!
          <span>Simple React Todo List</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm create={this.create} />
      </div>
    );
  }
}
