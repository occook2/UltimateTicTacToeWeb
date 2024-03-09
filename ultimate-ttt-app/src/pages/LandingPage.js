import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      {/* Rules Box */}
      {showRules && (
        <div className="rules-box">
          <span className="close" onClick={toggleRules}>&times;</span>
          <h2>Rules</h2>
          <ol>
            <li>Board Setup: Ultimate Tic-Tac-Toe is played on a 3x3 grid, with nine individual 3x3 grids within.</li>
            <li>Turns: Players take turns placing their symbol (traditionally X or O) on any empty space within one of the small 3x3 grids.</li>
            <li>Board Selection: When a player makes a move in one of the small grids, their opponent must then make a move in the corresponding small grid on the large board.</li>
            <li>Winning Condition: The objective is to win the small 3x3 grids. When a player wins a small grid, they get to mark that grid with their symbol (X or O), and it counts as a regular Tic-Tac-Toe win.</li>
            <li>Block Rule: If a player's next move corresponds to a small grid that has already been won or is full, they can play their next move in any other empty small grid on the large board.</li>
            <li>End of the Game: The game ends when one player wins three small grids in a row on the larger board or when all small grids are full, resulting in a draw.</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default LandingPage;

