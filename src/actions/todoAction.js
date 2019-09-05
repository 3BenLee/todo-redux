import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_INCOMPLETE } from './types';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      text
    }
  });

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: { id }
});

export const showAll = () => ({
  type: SHOW_ALL,
});

export const showIncomplete = () => ({
  type: SHOW_INCOMPLETE,
});
 