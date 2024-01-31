import React from 'react';
import './App.css'; // Import the CSS file
import Board from './components/Board';

function App() {
  return (
    <div className="app">
      <div className="center-container">
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;

