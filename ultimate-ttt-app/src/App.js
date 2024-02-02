import React from 'react';
import './App.css';
import BigBoard from './components/BigBoard';

function App() {
  return (
    <div className="app">
      <div className="center-container">
        <h1 className="title">Ultimate Tic-Tac-Toe</h1> {/* Updated title */}
          <BigBoard />
      </div>
    </div>
  );
}

export default App;

