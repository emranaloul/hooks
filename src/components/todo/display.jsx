import React, { useContext } from "react";
import { displayContext } from "../../context/display-items";

const Display = (props) => {
  const context2 = useContext(displayContext)

  return (
    <>
    <form onSubmit={(e) =>{props.handleInsert(e); context2.display(e.target.display.value,1)}}>
      <label for="display">Tasks Shown:</label>
      <input type="number" name="display" placeholder="display preferences" ></input>

    </form>
    </>
  );
};

export default Display;
