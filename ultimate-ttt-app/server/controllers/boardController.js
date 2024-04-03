const updateBoardService = require('../services/updateBoard');
const completedBoardService = require('../services/testBoardWin.js');
const completedGameService = require('../services/testGameEnd.js');
const nextBoardService = require('../services/nextBoard.js');
const agentService = require('../agents/randomAgent.js');

exports.handleMove = async (req, res) => {
    try {
        const { boardState, nextMoveAddress, player, bot } = req.body;
        console.log("Player Symbol is: " + player);
        // Update the board state after player move
        var updatedBoardState = await updateBoardService.updateBoardState(player, boardState, nextMoveAddress);
        
        // Test for completed boards
        updatedBoardState = await completedBoardService.testBoardWin(player, updatedBoardState, nextMoveAddress);
        
        // Determine if a game has ended and if so, initiate end sequence
        updatedBoardState = await completedGameService.testGameWin(player, updatedBoardState);
        
        // Determine which board can be played in next
        updatedBoardState = await nextBoardService.setNextBoard(updatedBoardState, nextMoveAddress);

        // If game over, return end game message
        if (updatedBoardState.gameProgress != "Incomplete") {
            res.status(200).json({ updatedBoardState });
        }
        else {
            // Select move for random Bot
            const botMove = await agentService.selectRandomMove(updatedBoardState);
            
            // Make move for random Bot
            updatedBoardState = await updateBoardService.updateBoardState(bot, boardState, botMove);

            // Test complete again for O
            updatedBoardState = await completedBoardService.testBoardWin(bot, updatedBoardState, botMove);
            
            // Determine if a game has ended and if so, initiate end sequence
            updatedBoardState = await completedGameService.testGameWin(bot, updatedBoardState);

            // Determine next board to play after bot makes move
            updatedBoardState = await nextBoardService.setNextBoard(updatedBoardState, botMove);

            // Send back the updated board state in the response
            res.status(200).json({ updatedBoardState });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
