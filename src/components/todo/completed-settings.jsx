import React, { useContext } from 'react';
import {CompletedTasks}  from '../../context/completed-tasks';

const CompletedTasksProvider = (props) => {

    const context = useContext(CompletedTasks)

    return (
        <>
            <input type="checkbox" name="completed" id="completed" checked={context.checked} onChange={context.toggle}></input>
            
            <label for="completed">Show Completed Task</label>
        </>
    
    )
    
}

export default CompletedTasksProvider;
