import React from "react";

// import ToDo from './components/todo/todo.js';
import ToDoAPI from "./components/todo/todo-connected";
import IncompleteTasks from "./context/completed-tasks";
import DisplayTasks from "./context/display-items";

function App() {
  return (
    <IncompleteTasks>
      <DisplayTasks>
        <div>
          <ToDoAPI />
        </div>
      </DisplayTasks>
    </IncompleteTasks>
  );
}

export default App;
