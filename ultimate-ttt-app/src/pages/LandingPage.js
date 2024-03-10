import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RulesBox from '../components/RulesBox.js'; // Import the RulesBox component
import './LandingPage.css'; // Import the CSS file for styling

function LandingPage() {
  // State to manage the visibility of the rules box
  const [showRules, setShowRules] = useState(false);

  // Function to toggle the visibility of the rules box
  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div>
      <h1>Welcome to Ultimate Tic-Tac-Toe!</h1>
      <div className="button-container">
        <Link to="/game">
          <button className="new-game-button">New Game</button>
        </Link>
        <button className="rules-button" onClick={toggleRules}>Rules</button>
      </div>
        <RulesBox showRules={showRules} toggleRules={toggleRules} />
    </div>
  );
}

export default LandingPage;

