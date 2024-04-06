const completedBoardMasks = require('../utils/completedBoardMasks.js');

exports.testGameWin = async (player, boardState, isPlayer) => {
    var gameWon = false;
    var gameTie = false;

    for (const mask of completedBoardMasks.data.completedBoardMasks) {
        var boardsCompleted = 0;
        var maskFits = true;
        for (let i = 0; i < 9; i++) {
            if (mask[i] == "-" && boardState.completeBoards[i] != player) {
                maskFits = false;
            }
            if (boardState.completeBoards[i] != "") {
                boardsCompleted++
            }
        }

        if (maskFits) gameWon = true;
    }

    if (gameWon) {
        if (isPlayer) {
            boardState.gameProgress = "win";
        }
        else {
            boardState.gameProgress = "lost";
        }
    }
    if (boardsCompleted == 9) {
        gameTie = true;
    }
    if (gameTie && !gameWon) {
        boardState.gameProgress = "tie";
    }
    return boardState;
};