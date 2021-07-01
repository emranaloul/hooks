import React, { useContext } from "react";
import { CompletedTasks } from "../../context/completed-tasks";
import { displayContext } from "../../context/display-items";
import Pagination from "react-js-pagination";

const DisplayProvider = (props) => {
  const context = useContext(CompletedTasks);
  const context2 = useContext(displayContext)

  return (
    <>
      <Pagination
        activePage={context.data.length/props.display}
        itemsCountPerPage={parseInt(props.display)}
        totalItemsCount={context.data.length}
        onChange={(e) => context2.display(props.display,e)}
      />
      
    </>
  );
};

export default DisplayProvider;
