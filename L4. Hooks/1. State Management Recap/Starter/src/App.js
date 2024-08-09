import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatBox from "./ChatBox";

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {

  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ]);

  const onAddNewMessage = (userName, text) => {
    setMessages([...messages, {username: userName, text: text}])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map(x => (
          <ChatBox userName={x.username} messages={messages} onAddNewMessage={onAddNewMessage}/>
        ))}
      </div>
    </div>
  );
};

export default App;
