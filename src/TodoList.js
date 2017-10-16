import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="small-container well">
        	<div className="bold">
        		What do you want to do today?
        	</div>

        	<div className="margin-top-20">
        		<input type="text" className="form-control" placeholder="Your todo..." />
        	</div>

        	<div className="margin-top-20">
        		<button type="button" id="submit-todo" className="btn btn-primary">Submit Todo</button>
        	</div>
        </div>

        <div id="todo-list" className="small-container">
        	<ol>
        		<li>I want to go shopping <a href="#">Done</a></li>
        		<li>Clean the house <a href="#">Done</a></li>
        	</ol>
        </div>
      </div>
    );
  }
}

export default TodoList;
