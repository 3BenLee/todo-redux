import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

const TodoList = (props) => {
  console.log('hello', props.todos)

  const handleClick = () => {
    () => (this.props.addTodo());
  };

  const todoItems = props.todos.map((todo, index) => {
    return (
      <li key={index}>
        {todo}
      </li>
    );
  })

  return (
    <div>
      <input placeholder='todo' onChange={e => updateInput(e.target.value)}/>
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
