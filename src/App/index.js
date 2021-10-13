import React from "react";
import { useToDos } from "./useToDos";
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
    <ToDoHeader loading={loading}>
      <ToDoCounter
        totalToDos={totalToDos}
        completedToDos={completedToDos}
        // loading={loading}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        // loading={loading}
      />
    </ToDoHeader>

    <ToDoList
      error={error}
      loading={loading}
      searchedToDos={searchedToDos}
      totalToDos={totalToDos}
      searchText={searchValue}
      onError={() => <p>ERROR!</p>}
      onLoading={() => <p>Loading...</p>}
      onEmptyToDos={() => <p>No tienes ninguna tarea, crea tu primer ToDo</p>}
      onEmptySearchResults={
        (searchText) => <p>No se tienen resultados para: {searchText}</p>
      }
    >
      {todo => (
        <ToDoItem
          key={todo.text}
          text={todo.text}
          completed = {todo.completed}
          onComplete = {() => completeToDo(todo.text)}
          onDelete = {() => deleteToDo(todo.text)}
        />
      )}
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
