exports.setNextBoard = async (boardState, lastMoveAddress) => {
    // Set Next Board to any board if game progress is not Incomplete
    if (boardState.gameProgress != "Incomplete") {
        boardState.boardMove = -1;
        return boardState;
    }
    
    const nextBoard = parseInt(lastMoveAddress % 9);
    var updatedBoardState = boardState;

    var nextBoardJSON = 9;

    if (updatedBoardState.completeBoards[nextBoard] != "") nextBoardJSON = -1;
    else nextBoardJSON = nextBoard;

    updatedBoardState.boardMove = nextBoardJSON;

    return updatedBoardState;
};