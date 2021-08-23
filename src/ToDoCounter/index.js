import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoCounter.css';

function ToDoCounter() {
  const { totalToDos, completedToDos } = React.useContext(ToDoContext)

  return (
    <h2 className="ToDoCounter">Has completado {completedToDos} de {totalToDos} TO DO</h2>
    )
  }

export { ToDoCounter };