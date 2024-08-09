import PropTypes from "prop-types";
import {useState} from "react";

const AddUsers = ({onAddUser, error}) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        gamesPlayed: 0
    });

    const changeFirstName = (event) => {
        setUser({...user, firstName: event.target.value});
    }

    const changeLastName = (event) => {
        setUser({...user, lastName: event.target.value});
    }

    const changeUserName = (event) => {
        setUser({...user, userName: event.target.value});
    }

    const addUser = (event) => {
        event.preventDefault();
        const success = onAddUser(user);
        if (success) {
            setUser({
                firstName: "",
                lastName: "",
                userName: "",
                gamesPlayed: 0
            });
        }
    }

    const userNotFullyConfigured = () => user.firstName === "" || user.lastName === "" || user.userName === "";

    return (
        <div className="add-user-form">
            <form onSubmit={addUser}>
                <input 
                type="text"
                placeholder="First Name"
                value={user.firstName}
                onChange={changeFirstName} />
                <input 
                type="text"
                placeholder="Last Name"
                value={user.lastName}
                onChange={changeLastName} />
                <input 
                type="text"
                placeholder="First Name"
                value={user.userName}
                onChange={changeUserName} />
                <button disabled={userNotFullyConfigured()}>Add</button>
            </form>
        </div>
    )
};

export default AddUsers;