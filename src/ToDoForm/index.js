import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoForm.css'

function ToDoForm() {
  const [newToDoValue, setNewToDoValue] = React.useState('');

  const {
    addToDo,
    setOpenModal,
  } = React.useContext(ToDoContext);

  const onChange = (event) =>{
    setNewToDoValue(event.target.value);
  }

  const onCancel = () =>{
    setOpenModal(false);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value = {newToDoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="ToDoForm-buttonContainer">
        <button
          type="button"
          className="ToDoForm-button ToDoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="ToDoForm-button ToDoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
  )
}

export { ToDoForm }