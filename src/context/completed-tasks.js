import React, { useEffect, useState } from 'react';
import useAjax from '../hooks/useajax';


const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

export const CompletedTasks = React.createContext();

const IncompleteTasks = (props) =>{
    let [handleRequest] = useAjax();
    let  toggleMode = () => {
        setToggle( state.checked === false ? true : false )
     };
     let sortFun  = () => {
         setSort( state.sort === false ? true : false )
     }

     const [data, setData] = useState([]);
     const [toggle, setToggle] = useState(false)
     const [sort, setSort] = useState(false)
    

    let state = {
        checked: toggle, 
        sort: sort,
        data: data,
        toggle: toggleMode,
        sortFun: sortFun,
    }
    
    useEffect( ()=>{
        (async ()=> {
            
            let results = await handleRequest(todoAPI, 'get')
            let list = results.data.results.filter(val => val.complete === false);
            if(state.checked === false){
                setData(list)
                
            } else if(state.checked === true) {
                setData(results.data.results)
            }
        })();
}, [state.checked])

useEffect( () => {
    console.log('hello')
    if(state.sort === false){
        setData(state.data)
        
    } else if(state.checked === true) {
         state.data.sort((a,b)=>{
            return b.difficulty - a.difficulty
           })
        //    let results = setData(results)
    }
}, [state.sort])
        
        // useEffect(()=>{
    //     console.log("hello")

    // }, [results])

    

    return(
        <CompletedTasks.Provider value={state}>
           
           {props.children}
        </CompletedTasks.Provider>
    )
}

export default IncompleteTasks;




