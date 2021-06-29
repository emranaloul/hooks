import React, { useEffect, useState} from 'react';
import If from './if';
import { Button } from 'react-bootstrap';
import JSONPretty from 'react-json-pretty';


let idF;
function TodoList(props) {
  
  const [flag, setFlag] = useState()
  
  let editHandler = (id)=>{ 
  idF= id
    setFlag(!flag)
  }
   function handler(e, id) {
     
    e.preventDefault()
    let value = document.getElementById(id).value;
    props.handleEdit(id,value)
    setFlag(!flag)
   }  
  return (

      <ul>
        {props.list? props.list.map(item => (
          <li
         
          key={item._id}
            className={`complete-${item.complete.toString()}`}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              Name: {item.text} <br></br>
             Assignee: {item.assignee}<br></br>
             Difficulty: {item.difficulty}
            </span>
            <button onClick={() =>  props.handleDelete(item._id)}>X</button>
            <form onSubmit={(e)=>handler(e,item._id)}>
            {/* <button type='button' onClick={() => setFlag(!flag)}>Edit</button> */}
            <Button type='button' onClick={()=>editHandler(item._id)}>Edit</Button>
           
            <If condition={flag && (idF === item._id)}>
              <Button type='submit'>
              submit
              </Button>
            {/* <button type='submit'>submit</button> */}
            {/* <input id={item._id}><JSONPretty id="json-pretty" data={item.text}></JSONPretty></input> */}
            <textarea id={item._id} placeholder={item.text} required></textarea>
            </If>
            </form>
          </li>
        )): null}
      </ul>
    
  );
}

export default TodoList;
