import React, { Component } from "react";
import "./toDo.css";
import { TodoForm, TodoList, Footer } from "./component/todo";
import {
  addTodo,
  generalId,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo,
  filterTodos
} from "./lib/todoHelper";
import { ThemeContext } from "./component/router/Router";
import { pipe, partial } from "./lib/utils";

class ToDoApp extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: true },
      { id: 2, name: "Build an Awesome App", isComplete: false },
      { id: 3, name: "Ship It", isComplete: false }
    ],
    currentTodo: ""
  };

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  };

  handleInputChange = event => {
    this.setState({
      currentTodo: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newId = generalId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: "",
      errorMessage: ""
    });
  };
  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Please supply the todo name"
    });
  };
  handleToggle = id => {
    // const getupdatedTodos = pipe(
    //   findById,
    //   toggleTodo,
    //   partial(updateTodo, this.state.todos)
    // );
    // const updatedTodos = getupdatedTodos(id, this.state.todos);
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({ todos: updatedTodos });
  };

  static contextType = ThemeContext;

  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;

    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="Todo-App">
        {this.state.errorMessage && (
          <div className="error">{this.state.errorMessage}</div>
        )}
        <TodoForm
          handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler}
        />

        <TodoList
          handleToggle={this.handleToggle}
          todos={displayTodos}
          handleRemove={this.handleRemove}
        />
        <Footer />
      </div>
    );
  }
}

export default ToDoApp;
