import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_INCOMPLETE } from '../actions/types';

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
    case SHOW_ALL:
      console.log('showAll', state);
      return [...state]

    case SHOW_INCOMPLETE:
      return state.filter((todo) => todo.completed === false);
    default: 
      return state;
  }
};

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch(action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//     default:
//       return state;
//   }
// };

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// }

export default todos;