import React from "react";
import { AppUI } from "./AppUI";
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
  <AppUI
  totalToDos={totalToDos}
  completedToDos={completedToDos}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  searchedToDos={searchedToDos}
  completeToDo={completeToDo}
  deleteToDo={deleteToDo}
  />
  );

}

export default App;
