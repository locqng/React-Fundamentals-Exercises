import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [numQuestions, setQuestions] = useState(0);
  const [numCorrect, setCorrect] = useState(0);
  const [proposedAnswer, setAnswer] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [time, setTime] = useState(10);


  const generateNewAnswer = () => {
    setTime(10);
    const v1 = Math.floor(Math.random() * 100);
    const v2 = Math.floor(Math.random() * 100);
    const v3 = Math.floor(Math.random() * 100);
    const newAnswer = Math.floor(Math.random() * 3) + v1 + v2 + v3;
    setValue1(v1);
    setValue2(v2);
    setValue3(v3);
    setAnswer(newAnswer);
    if (time === 0) {
      clearInterval();
      generateNewAnswer();
    }
  }

  const answerTrue = () => {
    setQuestions(numQuestions + 1);
    if (value1 + value2 + value3 === proposedAnswer)
      setCorrect(numCorrect + 1);
    generateNewAnswer();
  }

  const answerFalse = () => {
    setQuestions(numQuestions + 1);
    if (value1 + value2 + value3 !== proposedAnswer)
      setCorrect(numCorrect + 1);
    generateNewAnswer();
  }

  const countDown = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  }

  useEffect(() => {
    setInterval(countDown, 1000);
    generateNewAnswer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={answerTrue}>True</button>
        <button onClick={answerFalse}>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
        <p className="text">
          Time remaining: {time}
        </p>
      </div>
    </div>
  );
};

export default App;
