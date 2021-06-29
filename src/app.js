import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDoAPI from './components/todo/todo-connected'
import IncompleteTasks from './context/completed-tasks'

function App() {
  return (
    
      
    <IncompleteTasks>
    <div>
      <ToDoAPI />
    </div>

    </IncompleteTasks>
  );
}

export default App;

