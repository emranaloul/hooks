import React, { useEffect, useState , useContext} from "react";
import If from "./if";
import { Button } from "react-bootstrap";
import Acl from "./acl";
import {AuthContext} from "../../context/auth"

let idF;
let list;
function TodoList(props) {
  const [flag, setFlag] = useState();

  let editHandler = (id) => {
    idF = id;
    setFlag(!flag);
  };


  const context = useContext(AuthContext)
  

  function handler(e, id) {
    

    e.preventDefault();
    let value = document.getElementById(id).value;
    props.handleEdit(id, value);
    setFlag(!flag);
  }
  return (
    <>
      <ul>
        {props.list
          ? props.list.map((item) => (
              <li
                key={item._id}
                className={`complete-${item.complete.toString()}`}
              >
                <Acl capability="update">
                  <span onClick={() => props.handleComplete(item._id)}>
                    Name: {item.text} <br></br>
                    Assignee: {item.assignee}
                    <br></br>
                    Difficulty: {item.difficulty}
                  </span>
                </Acl>
               <If condition={!context.user.capabilities.includes('create') || !context.user.capabilities.includes('update') || !context.user.capabilities.includes('delete')}>

                <Acl capability="read">
                  <span>
                    Name: {item.text} <br></br>
                    Assignee: {item.assignee}
                    <br></br>
                    Difficulty: {item.difficulty}
                  </span>
                </Acl>

               </If>
               <Acl capability="delete">

                <button onClick={() => props.handleDelete(item._id)}>X</button>
               </Acl>
                <form onSubmit={(e) => handler(e, item._id)}>
                  {/* <button type='button' onClick={() => setFlag(!flag)}>Edit</button> */}
                  <Acl capability="update">

                  <Button type="button" onClick={() => editHandler(item._id)}>
                    Edit
                  </Button>
                  </Acl>

                  <If condition={flag && idF === item._id}>
                    <Button type="submit">submit</Button>
                    {/* <button type='submit'>submit</button> */}
                    {/* <input id={item._id}><JSONPretty id="json-pretty" data={item.text}></JSONPretty></input> */}
                    <textarea
                      id={item._id}
                      placeholder={item.text}
                      required
                    ></textarea>
                  </If>
                </form>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}

export default TodoList;
