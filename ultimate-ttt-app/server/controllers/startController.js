const agentService = require('../agents/randomAgent.js');

exports.handleMove = async (req, res) => {
    try {
        const { boardState, symbol } = req.body;
        
        boardState.player = symbol;

        if (symbol == "O") {
            // Make first CPU Move as X
        }
        
        res.status(200).json({ updatedBoardState });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred during symbol API' });
    }
};