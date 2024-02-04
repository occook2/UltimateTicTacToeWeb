import React from 'react';
import './BigBoard.css'; // Import the CSS file
import Board from './Board';

function BigBoard() {
    // Helper function to render a single board    
    const renderBoard = (i) => {
      return <Board key = {i} boardNumber = {i}/>;
    };
  
    // Helper function to render a row of boards
    const renderRow = (rowIndex) => {
      const boards = [];
      for (let j = 0; j < 3; j++) {
        const boardKey = rowIndex * 3 + j;
        boards.push(renderBoard(boardKey));
      }
      
      return (
        <div className="big-board-row" key={rowIndex}>
          {boards}
        </div>
      );
    };
  
    // Render the entire BigBoard
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
  
  