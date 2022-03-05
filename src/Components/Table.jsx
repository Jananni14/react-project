import React, { useState } from "react";
import { DragDropContext, Dropable, Draggable } from "react-beautiful-dnd";
import { itemsinOpen, itemsinContacted, itemsinWritten } from "./fixtures";
import uuid from "uuid/v4";
// import './style.css';
const columns = {
  [uuid()]: {
    name: "Open",
    items: itemsinOpen
  }
};

function Table() {
  const [columns, setColumns] = useState(columns);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DragDropContext onDropEnd={(result) => console.log(result)}>
        {Object.entries(columns).map(([id, col]) => {
          return <Dropable dropableId={id} key={id}></Dropable>;
        })}
      </DragDropContext>
      Hi{" "}
    </div>
  );
}

export default Table;
