import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
    <ToDoCounter />
    <ToDoSearch />

    <ToDoList>
      {error && <p>ERROR!</p> }
      {loading && <p>Loading...</p> }
      {(!loading && !searchedToDos.length)  && <p>Crea tu primer ToDo</p> }

      {searchedToDos.map(todo => (
        <ToDoItem
          key={todo.text}
          text={todo.text}
          completed = {todo.completed}
          onComplete = {() => completeToDo(todo.text)}
          onDelete = {() => deleteToDo(todo.text)}
        />
      ))}
    </ToDoList>

    <CreateToDoButton />
  </React.Fragment>
  );
}

export { AppUI }