import React, { useState, useEffect } from 'react';
import './BigBoard.css';
import emptyBoardState from '../mock-data/emptyBoardState.json';
import Board from './Board';
import axios from 'axios';

function BigBoard({ handleGameComplete }) {
  
  const [bigBoardState, setBigBoardState] = useState(emptyBoardState);
  const [playerSymbol, setPlayerSymbol] = useState('');
  const [botSymbol, setBotSymbol] = useState('');

  useEffect(() => {
    const selectedSymbol = localStorage.getItem('selectedSymbol');
    setPlayerSymbol(selectedSymbol);
    const botSym = selectedSymbol === 'X' ? 'O' : 'X';
    setBotSymbol(botSym);

    const initializeGame = async () => {
      const initialBoardState = { ...emptyBoardState, boardMove: -1 };

      if (selectedSymbol === 'O') {
        const postData = {
          boardState: initialBoardState,
          nextMoveAddress: -1,
          playerSymbol: selectedSymbol,
          botSymbol: botSym
        };

        try {
          const response = await axios.post('http://localhost:4000/move', postData);
          setBigBoardState(response.data.updatedBoardState);
        } catch (error) {
          console.error(error);
        }
      } else {
        setBigBoardState(initialBoardState); // Reset to initial empty state for 'X'
      }
    };

    initializeGame();

  }, []);

  const handleSquareClick = async (address) => {
    const postData = {
      boardState: bigBoardState,
      nextMoveAddress: address,
      playerSymbol: playerSymbol,
      botSymbol: botSymbol
    };

    try {
      const response = await axios.post('http://localhost:4000/move', postData);
      setBigBoardState(response.data.updatedBoardState);

      if (response.data.updatedBoardState.gameProgress !== "Incomplete") {
        handleGameComplete(response.data.updatedBoardState.gameProgress);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderBoard = (i, data, boardMove, complete, gameProgress) => {
    if (gameProgress !== "Incomplete" || i === boardMove || boardMove === -1) {
      return <Board key={i} boardNumber={i} boardData={data} boardMove={true} complete={complete} gameProgress={gameProgress} onSquareClick={handleSquareClick} />;
    } else {
      return <Board key={i} boardNumber={i} boardData={data} boardMove={false} complete={complete} gameProgress={gameProgress} onSquareClick={handleSquareClick} />;
    }
  };

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
