import PropTypes from "prop-types";
import User from "./User";
import { useState } from "react";

const UsersView = ({users}) => {

    const [viewGames, toggleView] = useState(true);

    const onChangeToggleView = () => {
        toggleView(!viewGames);
    }

    return (
        <div className="user-view">       
            <button onClick={onChangeToggleView}>
                {viewGames ? 'Hide games played' : 'Show games played'}
            </button>
            <ol> {users.map(i => {
                return (
                    <User userParam={i} viewGames={viewGames}/>
                )}
            )}
            </ol>
        </div>
    )
}

export default UsersView;