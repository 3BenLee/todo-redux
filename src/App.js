import React from 'react';
import './App.css';
import TodoList from './components/todo-list';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="Todos">
          Todos
          <TodoList/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
