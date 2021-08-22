import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
// import './App.css';

const defaultToDo = [
  {text: 'Paso 1', completed: true},
  {text: 'Paso 2', completed: false},
  {text: 'Paso 3', completed: false},
  {text: 'Correr', completed: false}
];

function App() {
  const [toDos, setToDos] = React.useState(defaultToDo);
  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = toDos.filter(todo => !!todo.completed).length
  const totalToDos = toDos.length

  let searchedToDos = [];

  if(!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(todo => {
      const toDoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    })

  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
    };

    const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos)
    }


  return (
    <React.Fragment>
      <ToDoCounter
        total = {totalToDos}
        completed = {completedToDos}
      />

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
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

export default App;
