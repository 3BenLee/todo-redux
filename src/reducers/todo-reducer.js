import { ADD_TODO, DELETE_TODO } from '../actions/types';

const todos = (state = ['buy soap'], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        text
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