import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from 'react';
import PropType from 'prop-types';

const App = () => {
  const addLike = () => {
    setLikes(likeState + 1);
  }
  const [likeState, setLikes] = useState(0)
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likeState}</p>
      <button onClick={() => addLike()} title="Like">Like</button>
    </div>
  );
};
App.propTypes = {};
export default App;
