const completedBoardMasks = require('../utils/completedBoardMasks.js');

exports.testBoardWin = async (player, boardState, lastMoveAddress) => {
    // Retrieve all data needed
    const completedMasks = completedBoardMasks.data.completedBoardMasks;
    const boardPlayed = parseInt(Math.floor(lastMoveAddress/9));

    // Only check the board that was just played in
    const boardCheck = boardState.bigBoard[boardPlayed];

    test = testBoardComplete(completedMasks, boardCheck, player);

    if (test.testWin) {
        boardState.completeBoards[boardPlayed] = player;
    }
    if (!test.testWin && test.testTie) {
        boardState.completeBoards[boardPlayed] = "-"; // Represents Cats Game
    }

    return boardState;
};

function testBoardComplete(completedMasks, board, player) {
    var completedBoard = false;
    var movesMadeInBoard = 0;
    var tempCompletedBoard = true;
    var catsGame = false;

    for (const mask of completedMasks) {
        movesMadeInBoard = 0;
        tempCompletedBoard = true;

        for (let i = 0; i < 9; i++) {
            if (mask[i] == "-" && board[i] != player) {
                tempCompletedBoard = false;
            }
            if (board[i] != "") {
                movesMadeInBoard++;
            }
        }

        if (tempCompletedBoard) completedBoard = true;
        if (movesMadeInBoard == 9) catsGame = true
    }

    return {"testWin" : completedBoard,
            "testTie" : catsGame};
}