// Example service function to update the board state
exports.updateBoardState = async (boardState, nextMoveAddress) => {
    // Your logic to update the board state based on the data received
    // This might involve validating the move, updating the state, etc.

    const updatedBoardState = makeMove("X", boardState, nextMoveAddress);

    return updatedBoardState;
};

const makeMove = (player, boardState, moveAddress) => {
    const board = parseInt(Math.floor(moveAddress/9));
    const boardMove = parseInt(moveAddress % 9);

    boardState.bigBoard[board][boardMove] = player;

    return boardState;
}
