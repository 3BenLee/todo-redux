import { ADD_TODO, DELETE_TODO } from '../actions/types';

const todos = (state = ['buy soap'], action) => {
  switch(action.type) {
    case ADD_TODO:
      console.log('Hello');
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        },
      ];
    case DELETE_TODO:
      return [
        ...state,
      ];
    default: 
      return state
  }
}

export default todos;