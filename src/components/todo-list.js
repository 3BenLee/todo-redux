import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, showAll, showIncomplete } from '../actions/todoAction';
import './todo-list.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { input: ''};
  }

  updateInput = input => {
    this.setState({ input })
  };

  handleAddTodo = () => {
    if (!this.state.input) return;

    this.props.addTodo(this.state.input);
    this.setState({ input: '' })
    console.log('after', this.state.input, this.props.todos.id);
  }

  handleCompleteTodo = (id) => {
    console.log('handleComplete', id);
    this.props.completeTodo(id);
  }

  handleIncompleteFilter = () => {
    this.props.showIncomplete();
  }

  handleShowAllFilter = () => {
    this.props.showAll();
  }

  render() {

    const { todos } = this.props

    const todoItems = todos && todos.length > 0 && todos.map((todo, index) => {
      console.log('component', todos);
      return (
        <li
          className={todo.completed ? 'completed' : 'notCompleted'}
          key={index}
          onClick={() => this.handleCompleteTodo(todo.id)}
        >
          {todo.text}
        </li>
      );
    })

    return (
      <div>
        <input placeholder='todo' onChange={e => this.updateInput(e.target.value)} value={this.state.input}/>
        <button onClick={this.handleAddTodo}>Submit</button>
        <ul>
          {todoItems}
        </ul>
        <button onClick={() => this.handleIncompleteFilter()}>Incomplete</button>
        <button onClick={() => this.handleShowAllFilter()}>Show All</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addTodo, completeTodo, showIncomplete, showAll })(TodoList);
