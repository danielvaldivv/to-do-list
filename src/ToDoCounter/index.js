import React from "react";
import './ToDoCounter.css';

function ToDoCounter({ totalToDos, completedToDos, loading }) {
  return (
    <h2
    className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}>
      Has completado {completedToDos} de {totalToDos} TO DO
      </h2>
    )
  }

export { ToDoCounter };