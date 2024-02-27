exports.selectRandomMove = async (boardState) => {
    const nextBoardNumber = boardState.boardMove;
    var nextMoveNumber = -1;

    if (nextBoardNumber == -1) {
        nextMoveNumber = selectMoveFromAllBoards(boardState);
    }
    else {
        nextMoveNumber = selectMoveFromOneBoard(boardState, nextBoardNumber);
    }
    
    return nextMoveNumber;
};

function selectMoveFromAllBoards(boardState) {
    var possibleMoves = [];

    for (let i = 0; i < 81; i++) {
        var boardCheck = parseInt(Math.floor(i/9));
        var squareCheck = parseInt(i % 9);
        if (boardState.completeBoards[boardCheck] == "") {
            if (boardState.bigBoard[boardCheck][squareCheck] == "") {
                possibleMoves.push(i);
            }
        }
    }

    return possibleMoves[Math.floor(Math.random()*possibleMoves.length)];;
}

function selectMoveFromOneBoard(boardState, boardNumber) {
    var possibleMoves = [];
    
    for (let i = 0; i < 9; i++) {
        if (boardState.bigBoard[boardNumber][i] == "") possibleMoves.push(boardNumber*9 + i);
    }

    return possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
}