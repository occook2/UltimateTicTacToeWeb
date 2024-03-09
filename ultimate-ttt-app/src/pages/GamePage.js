import React, {useState, useEffect} from 'react';
import BigBoard from '../components/BigBoard';
import EndGameMessage from '../components/EndGameMessage';
import { Link } from 'react-router-dom';
import './GamePage.css';

function GamePage() {
  const [gameEnd, setGameEnd] = useState(false); 
  const [gameOutcome, setGameOutcome] = useState("");

  useEffect(() => {
}, [gameOutcome]);

  const handleGameEnd = (endOutcome) => {
    setGameEnd(true);
    setGameOutcome(endOutcome);
  };

  return (
    <div className="game-page-container">
      <div className="center-container">
        <h1 className="title">Ultimate Tic-Tac-Toe</h1>
        <BigBoard handleGameComplete={handleGameEnd}/>
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="new-game-button">Main Menu</button>
        </Link>
        <button className="rules-button">Rules</button>
      </div>
      {gameEnd && <EndGameMessage outcome={ gameOutcome } />}
    </div>
  );
}

export default GamePage;

