// LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SymbolSelectionBox from '../components/SymbolSelectionBox'; // Import the SymbolSelectionBox component
import RulesBox from '../components/RulesBox'; // Import the RulesBox component
import './LandingPage.css';
import emptyBoardState from '../mock-data/emptyBoardState.json'
import axios from 'axios'

function LandingPage() {
  const [showSymbolSelection, setShowSymbolSelection] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [showRules, setShowRules] = useState(false);

  const toggleSymbolSelection = () => {
    setShowSymbolSelection(!showSymbolSelection);
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  const handleSymbolSelection = (symbol) => {
    setSelectedSymbol(symbol);
    localStorage.setItem('selectedSymbol', symbol);  // Store selected symbol in localStorage
    toggleSymbolSelection(); // Close the symbol selection box
    // Proceed with starting the game, passing the selected symbol
  };

  return (
    <div>
      <h1>Welcome to Ultimate Tic-Tac-Toe!</h1>
      <div className="button-container">
        <button className="new-game-button" onClick={toggleSymbolSelection}>New Game</button>
        <button className="rules-button" onClick={toggleRules}>Rules</button>
      </div>
      <SymbolSelectionBox
        showSymbolSelection={showSymbolSelection}
        toggleSymbolSelection={toggleSymbolSelection}
        handleSymbolSelection={handleSymbolSelection}
      />
      <RulesBox showRules={showRules} toggleRules={toggleRules} />
    </div>
  );
}

export default LandingPage;