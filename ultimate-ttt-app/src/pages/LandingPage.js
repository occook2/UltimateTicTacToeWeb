// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for styling

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Ultimate Tic-Tac-Toe!</h1>
      <div className="button-container">
        <Link to="/game">
          <button className="new-game-button">New Game</button>
        </Link>
        <button className="rules-button">Rules</button>
      </div>
    </div>
  );
}

export default LandingPage;

