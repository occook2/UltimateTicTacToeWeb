const updateBoardService = require('../services/updateBoard');
const completedBoardService = require('../services/testComplete');

exports.handleMove = async (req, res) => {
    try {
        const { boardState, nextMoveAddress } = req.body;
        
        // Call a service function to update the board state
        var updatedBoardState = await updateBoardService.updateBoardState("X", boardState, nextMoveAddress);
        
        // Call a service function to test for completed boards
        updatedBoardState = await completedBoardService.testComplete("X", boardState, nextMoveAddress);
        // Call a service to create a random bot move

        // Make move board again for O

        // Test complete again for O

        // Send back the updated board state in the response
        res.status(200).json({ updatedBoardState });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
