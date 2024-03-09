import React, {useState, useEffect} from 'react';
import './BigBoard.css'; // Import the CSS file
import emptyBoardState from '../mock-data/emptyBoardState.json'
import Board from './Board'
import axios from 'axios'

function BigBoard({ handleGameComplete }) {
  
  // ### Code to update BigBoard at start and on Click ###
  // Sets start to emptyBoardState and tracks state of BigBoard throughout game
  const [bigBoardState, setBigBoardState] = useState(emptyBoardState)
  
  // Updates rendering of BigBoard everytime the state changes
  useEffect(() => {
  }, [bigBoardState]);
  
  // Sends boardState and move to backeend server and updates state based on response
  const handleSquareClick = async (address) => {
    // Create data for Post Request
    const postData = {
      boardState: bigBoardState,
      nextMoveAddress: address
    };

    // API Post Request
    try {
      const response = await axios.post('http://localhost:4000/move', postData);
      // Update the bigBoardState based on the response from the server
      setBigBoardState(response.data.updatedBoardState);

      // Test Game End
      if (response.data.updatedBoardState.gameProgress != "Incomplete") {
        handleGameComplete(response.data.updatedBoardState.gameProgress);
      }
    } catch (error) {
      console.error(error);
    }
    
  };
  
   // ### Helper Functions to Render BigBoard ###

   // Helper function to render a single board    
   const renderBoard = (i, data, boardMove, complete, gameProgress) => {
    if (gameProgress != "Incomplete" || i == boardMove || boardMove == -1) {
      return <Board key = {i} boardNumber = {i} boardData = {data} boardMove = {true} complete = {complete} gameProgress = {gameProgress} onSquareClick={handleSquareClick}/>;
    }
    else {
      return <Board key = {i} boardNumber = {i} boardData = {data} boardMove = {false} complete = {complete} gameProgress = {gameProgress} onSquareClick={handleSquareClick}/>;
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
        boardState.completeBoards[boardKey],
        boardState.gameProgress));
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
  
  