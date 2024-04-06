import React, { useState,useEffect } from 'react';
import BigBoard from '../components/BigBoard';
import EndGameMessage from '../components/EndGameMessage';
import RulesBox from '../components/RulesBox.js';
import { Link } from 'react-router-dom';
import './GamePage.css';

function GamePage() {
  const [gameEnd, setGameEnd] = useState(false); 
  const [gameOutcome, setGameOutcome] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState('');
  const [botSymbol, setBotSymbol] = useState('');

  useEffect(() => {
    // Set player's symbol based on selection from localStorage
    const selectedSymbol = localStorage.getItem('selectedSymbol');
    setPlayerSymbol(selectedSymbol);

    // Set bot's symbol
    const botSymbol = selectedSymbol == "X" ? "O" : "X";
    setBotSymbol(botSymbol);
  }, []);

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
        <BigBoard 
          handleGameComplete={handleGameEnd}
          playerSymbol={playerSymbol}
          botSymbol={botSymbol}/>
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
