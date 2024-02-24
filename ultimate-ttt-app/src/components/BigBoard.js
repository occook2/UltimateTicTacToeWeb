import React, {useState, useEffect} from 'react';
import './BigBoard.css'; // Import the CSS file
import apiBoardState from '../mock-data/apiBoardState.json'
import emptyBoardState from '../mock-data/emptyBoardState.json'
import Board from './Board'
import axios from 'axios'

function BigBoard() {
  const [bigBoardState, setBigBoardState] = useState(emptyBoardState)

  useEffect(() => {

  }, [bigBoardState]);
  
  const handleSquareClick = async (address) => {
    // Simulate API call to fetch data based on the square address
    // This function will then update the state of BigBoard to reflect the changes
    const postData = {
      boardState: bigBoardState,
      nextMoveAddress: address
    };

    try {
      const response = await axios.post('http://localhost:4000/move', postData);
      // Update the bigBoardState based on the response from the server if needed
      setBigBoardState(response.data.updatedBoardState);
    } catch (error) {
      console.error(error);
    }

  };

   // Helper function to render a single board    
   const renderBoard = (i, data, boardMove, complete) => {
    if (i == boardMove || boardMove == -1) {
      return <Board key = {i} boardNumber = {i} boardData = {data} boardMove = {true} complete = {complete} onSquareClick={handleSquareClick}/>;
    }
    else {
      return <Board key = {i} boardNumber = {i} boardData = {data} boardMove = {false} complete = {complete} onSquareClick={handleSquareClick}/>;
    } 
  };

  // Helper function to render a row of boards
  const renderRow = (rowIndex, boardState) => {
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
  const renderBigBoard = (boardState) => {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(renderRow(i, boardState));
    }
    return <div className="big-board">{rows}</div>;
  };
  
  return (
    <div className='big-board-container'>
      {renderBigBoard(bigBoardState)}
    </div>
  );
}
  
  export default BigBoard;
  
  