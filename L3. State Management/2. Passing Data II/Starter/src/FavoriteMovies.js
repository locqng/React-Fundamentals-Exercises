import UserListCalculation from "./UsersListCalculation";

const FavoriteMovies = ({moviesByUsers, moviesList, usersList}) => {
    return <ol> 
        {
            Object.keys(moviesList).map((movieId) => {
                if (movieId in moviesByUsers) {
                    return <li key={movieId}>{moviesList[movieId].name} is the favorite of: 
                        <UserListCalculation userIds={moviesByUsers[movieId]} usersList={usersList}/>
                    </li>
                    
                }
                else 
                {
                    return <li key={movieId}>{moviesList[movieId].name} is no one's favorite</li>
                }
            })
        }
    </ol>;
};

export default FavoriteMovies;