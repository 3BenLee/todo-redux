import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_INCOMPLETE } from '../actions/types';

const initialState = {
  todoItems: [],
  filteredTodos: [],
  allItems: []
}

const todoList = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      console.log('add reducer', action);
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ],
        allItems: [
          ...state.todoItems,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      }
    case COMPLETE_TODO:
      // map items and change clicked item completed to true
      const completedItems = state.todoItems.map((item) => {
        if (item.id === action.payload.id) {
          item.completed = true;
        }
        return item;
      });
      return {
        ...state,
        todoItems: completedItems
      }

    case SHOW_ALL:
      console.log('showAll', state);
      return {
        ...state,
        todoItems: [...state.allItems]
      }

    case SHOW_INCOMPLETE:
      const incompleteTodosList = state.todoItems.filter((item) => {
        if (item.completed === false) {
          return item;
        }
      });
      return {
        ...state,
        todoItems: incompleteTodosList
      }

    default: 
      return state;
  }
};

export default todoList;