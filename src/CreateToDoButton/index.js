import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
  const OnclickButton = () => {
      props.setOpenModal(prevState => !prevState);
  }
  return (
    <button
      className="CreateToDoButton"
      onClick={OnclickButton}
    >
      +
    </button>
  )
}

export { CreateToDoButton }