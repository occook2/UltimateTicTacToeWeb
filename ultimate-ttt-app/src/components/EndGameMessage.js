import React from 'react';
import './EndGameMessage.css';

function EndGameMessage({ outcome }) {
  if (outcome === 'win') {
    return (
      <div className="end-game-message">
        <span>You have won!</span>
    </div>
    );
  }
  else if (outcome === 'lost') {
    return (
      <div className="end-game-message">
        <span>You have lost!</span>      
    </div>
    );
  }
  else if (outcome === 'tie') {
    return (
      <div className="end-game-message">
        <span>Tie Game!</span>
    </div>
    );
  }
  else return null;
}

export default EndGameMessage;
