const completedBoardMasks = require('../utils/completedBoardMasks.js');

exports.testBoardWin = async (player, boardState) => {
    var gameWon = false;
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
        console.log(player + " has won the game");
    }
};