import React, {useContext} from "react";
import { CompletedTasks } from "../../context/completed-tasks";

const Sort = props => {

    const context = useContext(CompletedTasks)

    return (
        <> 
        <input type="checkbox" name="sort" id="sort" checked={context.sort} onChange={context.sortFun}></input>
            
        <label for="sort">Sort by Difficulty</label>

        </>

    )

}

export default Sort;