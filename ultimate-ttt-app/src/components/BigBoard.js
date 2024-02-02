import React from 'react';
import './BigBoard.css'; // Import the CSS file
import Board from './Board';

function BigBoard() {
    // Helper function to render a single square
    const renderBoard = (i) => {
      return <Board />;
    };
  
    // Helper function to render a row of squares
    const renderRow = (rowIndex) => {
      const boards = [];
      for (let j = 0; j < 3; j++) {
        boards.push(renderBoard(rowIndex * 3 + j));
      }
      
      return (
        <div className="big-board-row">
          {boards}
        </div>
      );
    };
  
    // Render the entire board
    const renderBigBoard = () => {
      const rows = [];
      for (let i = 0; i < 3; i++) {
        rows.push(renderRow(i));
      }
      return <div className="big-board">{rows}</div>;
    };
  
    return (
      <div className='big-board-container'>
        {renderBigBoard()}
      </div>
    );
  }
  
  export default BigBoard;
  
  