import React from "react";
import { useToDos } from "./useToDos";
import { ToDoContext } from "./useToDos";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoForm } from "../ToDoForm";
import { CreateToDoButton } from "../CreateToDoButton";
import { Modal } from "../Modal";
import './App.css'


function App() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    addToDo,
  } = useToDos();

  return (
    <React.Fragment>
    <ToDoHeader>
      <ToDoCounter
        totalToDos={totalToDos}
        completedToDos={completedToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </ToDoHeader>

    <ToDoList>
      {error && <p>ERROR!</p> }
      {loading && <p>Loading...</p> }
      {(!loading && !searchedToDos.length)  && <p>No tienes ninguna tarea, crea tu primer ToDo</p> }

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

    {!!openModal && (
      <Modal>
        <ToDoForm
          addToDo={addToDo}
          setOpenModal={setOpenModal}
        />
      </Modal>
    )}

    <CreateToDoButton
      setOpenModal = {setOpenModal}
    />
  </React.Fragment>
  );

}

export default App;
