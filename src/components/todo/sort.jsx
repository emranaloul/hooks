import React, {useContext} from "react";
import { CompletedTasks } from "../../context/completed-tasks";
import { Button } from 'react-bootstrap';


const Sort = props => {

    const context = useContext(CompletedTasks)

    return (
        <> 
        {/* <button  id="sort" onClick={context.sortFun}>Sort by Difficulty</button> */}
        <Button id="sort" onClick={context.sortFun}>Sort by Difficulty</Button>
        {/* <input type="checkbox" name="sort" id="sort" checked={context.sort} onChange={context.sortFun}></input>
            
        <label for="sort">Sort by Difficulty</label> */}

        </>

    )

}

export default Sort;