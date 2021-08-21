import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
  const OnclickButton = (msg) => {
    alert(msg)
  }
  return (
    <button
      className="CreateToDoButton"
      onClick={() => OnclickButton('Aquí se debería abrir el modal')}
    >
      +
    </button>
  )
}

export { CreateToDoButton }