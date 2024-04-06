// SymbolSelectionBox.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SymbolSelectionBox.css';

function SymbolSelectionBox({ showSymbolSelection, toggleSymbolSelection, handleSymbolSelection }) {
  const handleSymbolSelectionAndNavigate = (symbol) => {
    handleSymbolSelection(symbol);
    // No need for programmatic navigation, Link handles it
  };

  return (
    <div className={showSymbolSelection ? 'symbol-selection-box visible' : 'symbol-selection-box'}>
      <div className="symbol-selection-content">
        <h2>Choose Your Symbol (X Goes First)</h2>
        <div className="symbol-buttons">
          <Link to="/game" onClick={() => handleSymbolSelectionAndNavigate('X')}>X</Link>
          <Link to="/game" onClick={() => handleSymbolSelectionAndNavigate('O')}>O</Link>
        </div>
      </div>
    </div>
  );
}

export default SymbolSelectionBox;
