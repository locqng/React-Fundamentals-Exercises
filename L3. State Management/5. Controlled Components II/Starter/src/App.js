import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";

const App = () => {
  const [items, setItems] = useState([]);


  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddItem onAddItem={addItem}/>
      <DeleteItem deleteItem={deleteLastItem} noItemFound={noItemsFound()}/>
      <p className="items">Items</p>
      <ItemList itemList={items}/>
    </div>
  );
};

export default App;
