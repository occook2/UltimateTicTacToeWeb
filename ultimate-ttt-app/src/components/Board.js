import React from 'react';
import './Board.css'; // Import the CSS file
import Square from './Square';

function Board({ boardNumber, boardData, boardMove, complete, onSquareClick}) {
  // Helper function to render a single square
  const renderSquare = (i, val) => {
    return <Square key = {i} address = {i} value = {val} possibleMove = {boardMove} onSquareClick={onSquareClick}/>;
  };

  // Helper function to render a row of squares
  const renderRow = (rowIndex) => {
    const squares = [];
    for (let j = 0; j < 3; j++) {
      const squareKey = boardNumber*9 + rowIndex * 3 + j
      const squareValue = boardData[rowIndex * 3 + j];
      squares.push(renderSquare(squareKey, squareValue));
    }
    
    return (
      <div className="board-row" key={rowIndex}>
        {squares}
      </div>
    );
  };

  // Render the entire board
  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(renderRow(i));
    }
    return <div className="board">{rows}</div>;
  };

  // Determines type of board render based on if it is a possible move, complete, or blocked
  if (complete != "") {
    return (
      <div className='board-container complete'>
        {complete}
      </div>
    );
  }
  else if (boardMove) {
    return (
      <div className='board-container open'>
        {renderBoard()}
      </div>
    );
  }
  else {
    return (
      <div className='board-container closed'>
        {renderBoard()}
      </div>
    );
  }
  
}

export default Board;

