import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI() {

  return (
    <React.Fragment>
    <ToDoCounter />
    <ToDoSearch />

    <ToDoContext.Consumer>
      {({
        error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo}) => (
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
      )
      }
    </ToDoContext.Consumer>
      

    <CreateToDoButton />
  </React.Fragment>
  );
}

export { AppUI }