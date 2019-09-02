import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';
import { addTodo } from '../actions/todoAction';
// import TodoItem from './todo-item'

const TodoList = (props) => {
  console.log('hello', props.todos)

  const handleClick = () => {
    alert('Clicked!');
    dispatch(addTodo(text));
  };

  const todoItems = props.todos.map((todo) => {
    return (
      <li>
        {todo}
      </li>
    );
  })

  return (
    <div>
      <input placeholder='todo'/>
      <button onClick={() => handleClick()}>Submit</button>
      <ul>
        {todoItems}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addTodo })(TodoList);
