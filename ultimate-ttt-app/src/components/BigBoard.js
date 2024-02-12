import React from 'react';
import './BigBoard.css'; // Import the CSS file
import boardState from '../mock-data/boardState.json'
import emptyBoardState from '../mock-data/emptyBoardState.json'
import Board from './Board';

function BigBoard() {
    // Helper function to render a single board    
    const renderBoard = (i, data, boardMove, complete) => {
      if (i == boardMove || boardMove == -1) {
        return <Board key = {i} boardNumber = {i} boardData = {data} boardMove = {true} complete = {complete} onSquareClick={handleSquareClick}/>;
      }
      else {
        return <Board key = {i} boardNumber = {i} boardData = {data} boardMove = {false} complete = {complete} onSquareClick={handleSquareClick}/>;
      }
      
    };
    
    const handleSquareClick = (address) => {
      // Simulate API call to fetch data based on the square address
      // This function will then update the state of BigBoard to reflect the changes
      console.log("API call triggered for square address: ", address);
  };

    // Helper function to render a row of boards
    const renderRow = (rowIndex) => {
      const boards = [];
      for (let j = 0; j < 3; j++) {
        const boardKey = rowIndex * 3 + j;
        boards.push(renderBoard(boardKey, 
          boardState.bigBoard[boardKey], 
          boardState.boardMove, 
          boardState.completeBoards[boardKey]));
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
  
  