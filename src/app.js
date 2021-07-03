import React from "react";


// import ToDo from './components/todo/todo.js';
import ToDoAPI from "./components/todo/todo-connected";
import IncompleteTasks from "./context/completed-tasks";
import DisplayTasks from "./context/display-items";
import LoginBar from './components/todo/login-bar'
import Auth from './context/auth';
import Acl from './components/todo/acl'

const TodoRender = props => {
  return(

  <Acl capability='read'>
     <ToDoAPI />
  </Acl>
  )
}

function App() {
  return (
    <Auth>
    <IncompleteTasks>
      <DisplayTasks>
        <div>
          <LoginBar/>
          <TodoRender/>
        </div>
      </DisplayTasks>
    </IncompleteTasks>
    </Auth>
  );
}

export default App;
