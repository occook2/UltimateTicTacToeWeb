const updateBoardService = require('../services/updateBoard');
const completedBoardService = require('../services/testBoardWin.js');
const completedGameService = require('../services/testGameEnd.js');
const nextBoardService = require('../services/nextBoard.js');
const agentService = require('../agents/randomAgent.js');

exports.handleMove = async (req, res) => {
    try {
        const { boardState, nextMoveAddress, playerSymbol, botSymbol } = req.body;

        let updatedBoardState;

        // If the player's symbol is 'O' and nextMoveAddress is -1, make the bot move first
        if (playerSymbol === 'O' && nextMoveAddress === -1) {
            const botMove = await agentService.selectRandomMove(boardState);

            updatedBoardState = await updateBoardService.updateBoardState(botSymbol, boardState, botMove);

            updatedBoardState = await completedBoardService.testBoardWin(botSymbol, updatedBoardState, botMove);

            updatedBoardState = await completedGameService.testGameWin(botSymbol, updatedBoardState, false);

            updatedBoardState = await nextBoardService.setNextBoard(updatedBoardState, botMove);

            res.status(200).json({ updatedBoardState });
            return;
        }

        // Update the board state after player move
        updatedBoardState = await updateBoardService.updateBoardState(playerSymbol, boardState, nextMoveAddress);
        
        // Test for completed boards
        updatedBoardState = await completedBoardService.testBoardWin(playerSymbol, updatedBoardState, nextMoveAddress);
        
        // Determine if a game has ended and if so, initiate end sequence
        updatedBoardState = await completedGameService.testGameWin(playerSymbol, updatedBoardState, true);
        
        // Determine which board can be played in next
        updatedBoardState = await nextBoardService.setNextBoard(updatedBoardState, nextMoveAddress);

        // If game over, return end game message
        if (updatedBoardState.gameProgress !== "Incomplete") {
            res.status(200).json({ updatedBoardState });
            return;
        }

        // Select move for random Bot
        const botMove = await agentService.selectRandomMove(updatedBoardState);
        
        // Make move for random Bot
        updatedBoardState = await updateBoardService.updateBoardState(botSymbol, updatedBoardState, botMove);

        // Test complete again for botSymbol
        updatedBoardState = await completedBoardService.testBoardWin(botSymbol, updatedBoardState, botMove);
        
        // Determine if a game has ended and if so, initiate end sequence
        updatedBoardState = await completedGameService.testGameWin(botSymbol, updatedBoardState, false);

        // Determine next board to play after bot makes move
        updatedBoardState = await nextBoardService.setNextBoard(updatedBoardState, botMove);

        // Send back the updated board state in the response
        res.status(200).json({ updatedBoardState });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
