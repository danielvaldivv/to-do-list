import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
// import './App.css';

const toDo = [
  {text: 'Paso 1', completed: false},
  {text: 'Paso 2', completed: false},
  {text: 'Paso 3', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />

    <ToDoSearch />

    <ToDoList>
      {toDo.map(todo => (
        <ToDoItem key={todo.text} text={todo.text} />
      ))}
    </ToDoList>

    <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
