import PropTypes from "prop-types";
import { useState } from "react";

const AddItem = ({onAddItem}) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault();
        onAddItem(value);
        setValue("");
      };
    const inputIsEmpty = () => value === "";

    return (
        <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    );
} 

AddItem.propTypes = {
    onAddItem: PropTypes.func.isRequired
}

export default AddItem;