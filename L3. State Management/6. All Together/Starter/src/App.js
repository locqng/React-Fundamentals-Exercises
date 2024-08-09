import logo from "./logo.svg";
import "./App.css";
import AddUsers from "./AddUser";
import { useState } from "react";
import UsersView from "./UsersView";

const App = () => {

  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");

  const addUser = (user) => {
    if (users.length > 0 && users.find(x => x.userName.trim() === user.userName.trim())) {
      setError("Username exists!");
    }
    else {
      setError("");
      setUsers([...users, user]);
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <AddUsers onAddUser={addUser}/>
      <h3>{error}</h3>
      <h2>Users List: </h2>
      <UsersView users={users} />
    </div>
  );
};

export default App;
