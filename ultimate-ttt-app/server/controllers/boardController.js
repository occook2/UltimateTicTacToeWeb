const updateBoardService = require('../services/updateBoard');
const completedBoardService = require('../services/testComplete');
const nextBoardService = require('../services/nextBoard.js');

exports.handleMove = async (req, res) => {
    try {
        const { boardState, nextMoveAddress } = req.body;
        
        // Update the board state after player move
        var updatedBoardState = await updateBoardService.updateBoardState("X", boardState, nextMoveAddress);
        
        // Test for completed boards
        updatedBoardState = await completedBoardService.testComplete("X", updatedBoardState, nextMoveAddress);
        
        // Determine which board can be played in next
        updatedBoardState = await nextBoardService.setNextBoard(updatedBoardState, nextMoveAddress);

        // Make move board again for O


        // Test complete again for O


        // Determine next board to play after bot makes move


        // Send back the updated board state in the response
        res.status(200).json({ updatedBoardState });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
