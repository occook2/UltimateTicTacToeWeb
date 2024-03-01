import React from 'react';
import BigBoard from '../components/BigBoard';
import { Link } from 'react-router-dom';
import './GamePage.css';

function GamePage() {
  return (
    <div className="game-page-container">
      <div className="center-container">
        <h1 className="title">Ultimate Tic-Tac-Toe</h1>
        <BigBoard />
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="new-game-button">Main Menu</button>
        </Link>
        <button className="rules-button">Rules</button>
      </div>
    </div>
  );
}

export default GamePage;

