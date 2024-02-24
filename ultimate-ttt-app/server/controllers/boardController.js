const boardService = require('../services/boardService');

exports.handleMove = async (req, res) => {
    try {
        const { boardState, nextMoveAddress } = req.body;
        console.log(boardState);
        // Call a service function to update the board state
        const updatedBoardState = await boardService.updateBoardState(boardState, nextMoveAddress);

        // Send back the updated board state in the response
        res.status(200).json({ updatedBoardState });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
