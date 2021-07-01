import React, { useEffect, useState, useContext } from "react";
import { CompletedTasks } from "./completed-tasks";

export const displayContext = React.createContext();

const DisplayTasks = (props) => {
  const context = useContext(CompletedTasks);
  useEffect(() => {
    displayFun()
  },[context]);

  const [data, setData] = useState([])
  let displayFun = (x,y=1) =>{
      let results = [] 
         for(let i = ((y-1) * (x)); i < (x*y); i++){
        results.push(context.data[i])
      }

    setData(results);
}
  let state = { checked: context.checked, data: data[0]?data:context.data, toggle: context.toggle, sort:context.sort, sortFun: context.sortFun, display: displayFun };
 
  return (<displayContext.Provider value={state}>{props.children}</displayContext.Provider>);
};

export default DisplayTasks;
