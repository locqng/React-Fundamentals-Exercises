const FavoriteMovies = ({movies, users, profiles, isMovieLists}) => {
    if (isMovieLists) {
        let i = 0;
        console.log(movies[1]);
        return <ol> {
            movies.map((movie) => {
                console.log(movie)
                return <li>i</li>;
            })
            // profiles.map((profile) => {
            //     return <li key={profile.id}>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}</li>;
            // })
                // movies.map((movie) => {
                //     i++;
                //     const matchingProfiles = profiles.filter(profile => profile.favoriteMovieID == i);
                //     return matchingProfiles.count > 0 ? 
                //     <li key={i}>{movie[i].name} is the favorite of: 
                //         <ul>
                //             {
                //                 profiles.filter(profile => profile.favoriteMovieID == i)
                //                         .map((profile) => {
                //                             return <li key={i}>
                //                                 users[profile.userID].name
                //                             </li>
                //                         })
                //             }
                //         </ul>
                //     </li> : 
                //     <li key={i}>{movie[i].name} is no one's favorite</li>
                // })
            }
        </ol>;
    }
    return <ol> {
            profiles.map((profile) => {
                return <li key={profile.id}>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}</li>;
            })
        }
        </ol>;
};

export default FavoriteMovies;