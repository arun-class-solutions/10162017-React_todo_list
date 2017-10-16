import React, { Component } from "react";
import update from "immutability-helper";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todoInput: ""
    }
  }

  handleChange(event) {
    this.setState(update(this.state, {
      $merge: {
        todoInput: event.target.value
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      todos: this.state.todos.concat(this.state.todoInput),
      todoInput: ""
    });
  }

  render() {
    return (
      <div>
        <div className="small-container well">
        	<div className="bold">
        		What do you want to do today?
        	</div>

          <form onSubmit={this.handleSubmit.bind(this)}>
          	<div className="margin-top-20">
          		<input onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Your todo..." value={this.state.todoInput} />
          	</div>

          	<div className="margin-top-20">
          		<button type="submit" id="submit-todo" className="btn btn-primary">Submit Todo</button>
          	</div>
          </form>
        </div>

        <div id="todo-list" className="small-container">
        	<ol>
            {this.state.todos.map((todo, index) => {
              return (
        		    <li key={index}>{todo} <a href="#">Done</a></li>
              );
            }) }
        	</ol>
        </div>
      </div>
    );
  }
}

export default TodoList;
