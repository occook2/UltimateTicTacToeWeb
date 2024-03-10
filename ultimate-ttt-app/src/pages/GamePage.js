import React, { useState } from 'react';
import BigBoard from '../components/BigBoard';
import EndGameMessage from '../components/EndGameMessage';
import RulesBox from '../components/RulesBox.js';
import { Link } from 'react-router-dom';
import './GamePage.css';

function GamePage() {
  const [gameEnd, setGameEnd] = useState(false); 
  const [gameOutcome, setGameOutcome] = useState("");
  const [showRules, setShowRules] = useState(false);

  const handleGameEnd = (endOutcome) => {
    setGameEnd(true);
    setGameOutcome(endOutcome);
  };

  const toggleRules = () => {
    setShowRules(!showRules);
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
        <button className="rules-button" onClick={toggleRules}>Rules</button>
      </div>
      {gameEnd && <EndGameMessage outcome={ gameOutcome } />}
      <RulesBox showRules={showRules} toggleRules={toggleRules} />
    </div>
  );
}

export default GamePage;
