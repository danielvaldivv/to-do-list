import React from "react";
import './ToDoCounter.css';

function ToDoCounter({ totalToDos, completedToDos }) {
  return (
    <h2 className="ToDoCounter">Has completado {completedToDos} de {totalToDos} TO DO</h2>
    )
  }

export { ToDoCounter };