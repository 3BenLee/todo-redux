import { ADD_TODO, COMPLETE_TODO } from './types';

let nextTodoId = 0;

export const addTodo = (text) => {
  console.log('action',text)
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      text
    }
  }
}

export const completeTodo = (id) => {
  console.log('complete action', id)
  return {
    type: COMPLETE_TODO,
    payload: { id }
  }
}
 