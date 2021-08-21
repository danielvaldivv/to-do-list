import React from "react";
import './ToDoItem.css';

function ToDoItem(props) {

  const onComplete = () => {
    alert('Ya completaste el ToDo ' + props.text)
  }

  const onDelete = () => {
    alert('Borraste el ToDo ' + props.text)
  }

  return (
    <li className="ToDoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick = {onComplete}
      >
        ᄼ
      </span>
      <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick = {onDelete}
      >
        X
      </span>
    </li>
    );
}

export { ToDoItem };