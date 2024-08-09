const TextBox = ({message, isDisabled, onTypeMessage, onSend}) => {
    return (
    <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={onTypeMessage}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={isDisabled()} onClick={onSend}>
              SEND
            </button>
          </div>
        </form>
    </div>
    );
}

export default TextBox;
