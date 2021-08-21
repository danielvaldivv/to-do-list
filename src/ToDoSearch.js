import React from "react";
import './ToDoSearch.css';

function ToDoSearch() {

  const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="ToDoSearch"
      placeholder="Search To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { ToDoSearch };