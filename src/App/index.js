import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

// const defaultToDo = [
//   {text: 'Paso 1', completed: true},
//   {text: 'Paso 2', completed: false},
//   {text: 'Paso 3', completed: false},
//   {text: 'Correr', completed: false}
// ];

function useLocalStorage(itemName, initialValue) {
  const[error, setError] = React.useState(false);

  const[loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        };
  
        setItem(parsedItem);
        setLoading(false);
      } catch (error){
        setError(error)
      }
    }, 1000);
  });


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };

}

function App() {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

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
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos)
  }

  return (
  <AppUI
  loading={loading}
  error={error}
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
