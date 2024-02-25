const completedBoardMasks = require('../utils/completedBoardMasks.js');

exports.testComplete = async (player, boardState, lastMoveAddress) => {
    // Retrieve all data needed
    const completedData = completedBoardMasks.data.completedBoardMasks;
    const boardPlayed = parseInt(Math.floor(lastMoveAddress/9));

    // Only check the board that was just played in
    const boardCheck = boardState.bigBoard[boardPlayed];

    var completedBoard = false;
    var movesMadeInBoard = 0;
    var tempCompletedBoard = true;

    for (const mask of completedData) {
        movesMadeInBoard = 0;
        tempCompletedBoard = true;

        for (let i = 0; i < 9; i++) {
            if (mask[i] == "-" && boardCheck[i] != player) {
                tempCompletedBoard = false;
            }
            if (boardCheck[i] != "") {
                movesMadeInBoard++;
            }
        }

        if (tempCompletedBoard) {
            completedBoard = true
        }
    }

    if (completedBoard) {
        boardState.completeBoards[boardPlayed] = player;
        console.log(boardState);
        console.log(boardCheck);
    }

    return boardState;
};