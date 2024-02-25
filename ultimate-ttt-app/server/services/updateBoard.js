exports.updateBoardState = async (player, boardState, nextMoveAddress) => {
    // Given a specific move by a player and a boardState, update the entire JSON
    const updatedBoardState = makeMove(player, boardState, nextMoveAddress);

    return updatedBoardState;
};

const makeMove = (player, boardState, moveAddress) => {
    const board = parseInt(Math.floor(moveAddress/9));
    const boardMove = parseInt(moveAddress % 9);

    boardState.bigBoard[board][boardMove] = player;

    return boardState;
}
