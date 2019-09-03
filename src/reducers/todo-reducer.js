import { ADD_TODO, COMPLETE_TODO } from '../actions/types';

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        },
      ];
    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      })
    default: 
      return state
  }
}

export default todos;