import React from "react";
// import { ToDoProvider } from "../ToDoContext";
// import { ToDoCounter } from "../ToDoCounter";
// import { ToDoList } from "../ToDoList";
// import { ToDoSearch } from "../ToDoSearch";
// import { AppUI } from "./AppUI";

function App() {
  const [state, setState] = React.useState('Estado compartido');

  return(
    <>
      <ToDoHeader>
        <ToDoCounter />
        <ToDoSearch />
      </ToDoHeader>

      <ToDoList>
        <ToDoItem state={ state } />
      </ToDoList>
    </>
  );
}

function ToDoHeader({ children }) {
  return(
    <>
      <header>
        {children}
      </header>
    </>
  );
}

function ToDoList( {children}) {
  return(
    <section className="ToDolist-Container">
    {children}
    </section>
  );
}

function ToDoCounter ({ children }) {
  return (
    <p>
      ToDoCounter
    </p>
  );
}

function ToDoSearch () {
  return (
    <p>ToDoSearch</p>
  );
}

function ToDoItem ({ state }) {
  return (
    <p>ToDoItem: { state }</p>
  );
}

// function App() {

//   return (
//   <ToDoProvider>
//     <AppUI />
//   </ToDoProvider>
//   );

// }

export default App;
