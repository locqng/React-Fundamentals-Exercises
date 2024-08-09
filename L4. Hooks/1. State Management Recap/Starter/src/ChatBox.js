import { useState } from "react";
import TextBox from "./TextBox";

const ChatBox = ({userName, messages, onAddNewMessage}) => {
    
    const [message, setMessage] = useState('');

    const onTypeMessage = (event) => {
        setMessage(event.target.value);
    }

    // If the user did not type anything, he/she should not be allowed to submit.
    const isDisabled = () => {
        return message === '';
    };

    const onSendMessage = () => {
        onAddNewMessage(userName, message);
        setMessage('');
    }

    return (       
    <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{userName}</div>
        <ul className="message-list">
            {messages.map((message, index) => (
            <li
                key={index}
                className={
                message.username === userName
                    ? "message sender"
                    : "message recipient"
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>
            ))}
        </ul>
        <TextBox message={message} isDisabled={isDisabled} onTypeMessage={onTypeMessage} onSend={onSendMessage}/>
    </div>
    );
}

export default ChatBox;