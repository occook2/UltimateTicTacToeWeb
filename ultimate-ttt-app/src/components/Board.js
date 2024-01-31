import React from 'react';
import './Board.css'; // Import the CSS file
import Square from './Square';

function Board() {
  // Helper function to render a single square
  const renderSquare = (i) => {
    return <Square />;
  };

  // Helper function to render a row of squares
  const renderRow = (rowIndex) => {
    const squares = [];
    for (let j = 0; j < 3; j++) {
      squares.push(renderSquare(rowIndex * 3 + j));
    }
    
    return (
      <div className="board-row">
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

  return (
    <div>
      {renderBoard()}
    </div>
  );
}

export default Board;

