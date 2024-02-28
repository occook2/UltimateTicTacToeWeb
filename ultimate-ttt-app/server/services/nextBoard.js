exports.setNextBoard = async (boardState, lastMoveAddress) => {
    const nextBoard = parseInt(lastMoveAddress % 9);
    var updatedBoardState = boardState;

    var nextBoardJSON = 9;

    if (updatedBoardState.completeBoards[nextBoard] != "") nextBoardJSON = -1;
    else nextBoardJSON = nextBoard;

    updatedBoardState.boardMove = nextBoardJSON;

    return updatedBoardState;
};