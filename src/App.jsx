import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(1);

  const changeScore = () => {
    setCurrentScore(currentScore + currentPoint);
  };

  const changePoint = () => {
    if (currentScore >= 10) {
      setCurrentPoint(currentPoint + 1);
      setCurrentScore(currentScore - 10);
    } else {
      alert("You can't afford that!");
    }
  };

  const resetGame = () => {
    setCurrentPoint(1)
    setCurrentScore(0)
  }  

  if(currentScore >= 100) {
     return ( 
      <main>
      <h1>Current Score: {currentScore}</h1>
     <h2>You win!</h2>
     <button onClick={resetGame}>Play again?</button>
     </main>
     )
  }
  return (
    <main>
      <h1>Current Score: {currentScore}</h1>
      <h2></h2>
      <button onClick={changeScore}>+{currentPoint}</button>
      <button onClick={changePoint}>
        Pay 10 points to change from +{currentPoint} to +{currentPoint + 1}
      </button>
    </main>
  );
}

export default App;
