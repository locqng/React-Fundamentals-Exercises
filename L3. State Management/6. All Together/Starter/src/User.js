import { useState } from "react";

const User = ({userParam, viewGames}) => {
    const [user, setUser] = useState(userParam);

    const setGamesPlayed = () => {
        setUser({...user, gamesPlayed: user.gamesPlayed + 1})
    }
    return <li key={user.userName}>
        {user.userName} played {viewGames ? user.gamesPlayed : '*'} games
        <button onClick={setGamesPlayed}>+</button>
    </li>
    } 

export default User;