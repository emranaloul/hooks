import React, { useEffect, useState, useContext } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import axios from "axios";
import useAjax from "../../hooks/useajax";
import  {CompletedTasks}  from '../../context/completed-tasks';
import CompletedSettings from './completed-settings'


import "./todo.scss";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDo = () => {
  

  const context = useContext(CompletedTasks)
  console.log("🚀 ~ file: todo-connected.js ~ line 17 ~ ToDo ~ context", context)

  let [handleRequest] = useAjax();
  const [list, setList] = useState([]);

  const _addItem = async (item) => {
    item.due = new Date();
    try {
      let savedItem = await handleRequest(todoAPI, "post", item);
      setList([...list, savedItem.data]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const _toggleComplete = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      try {
        let savedItem = await handleRequest(url, "put", item);
        setList(
          list.map((listItem) =>
            listItem._id === item._id ? savedItem.data : listItem
          )
        );
      } catch (error) {
        console.error(error.message);
      }
    }
  };
  
  const _getTodoItems =   () => {


    handleRequest(todoAPI, "get")
    .then((results) => {
      setList( context.data );

    })

    .catch(console.error);
    
    // try {   
    //   let list = await handleRequest(todoAPI, "get");
    //   console.log("🚀 ~ file: todo-connected.js ~ line 55 ~ const_getTodoItems= ~ list", list)
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  const handleDelete = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;
      try {
        await handleRequest(url, "delete", item);
        let ids = list.indexOf(item);
        let newList = [...list];
        newList.splice(ids, 1);
        setList(newList);
      } catch (error) {
        console.error(error.message);
      }
    }
  };
  const handleEdit = (id, value) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.text = value;

      let url = `${todoAPI}/${id}`;

      handleRequest(url, "put", item)
        .then((savedItem) => {
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem.data : listItem
            )
          );
        })
        .catch(console.error);
    }
  };

  useEffect(_getTodoItems, [context]);

  return (
    <>

      <header>
        <h2>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </h2>
      </header>

      <section className="todo">
        <div>
          <CompletedSettings />
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </section>
    </>
    
  );
};

export default ToDo;
