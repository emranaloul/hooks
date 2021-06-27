import React, { useEffect, useState }from 'react';
import { Button } from 'react-bootstrap';


const TodoForm = (props) => {
  const [task, setTask] = useState({});

  let handleInputChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value }) 
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(task);
    const item = {};
   setTask({item})
  };
  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        {/* <button>Add Item</button> */}
        <Button>Add Item</Button>
      </form>
    </>
  );
}


export default TodoForm;
