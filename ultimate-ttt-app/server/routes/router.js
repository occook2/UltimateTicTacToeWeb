const express = require('express')
const router = express.Router()

router.post('/move', (req, res) => {
    // Extract data from the request body
    const { boardState, nextMoveAddress } = req.body;

    // Process the boardState and nextMoveAddress as needed
    console.log("Received boardState:", boardState);
    console.log("Next move address:", nextMoveAddress);

    // Example response
    var updatedBoardState = boardState;
    updatedBoardState.bigBoard[0][0] = "X";

    // Send back the updated board state or any other response
    res.status(200).json({ updatedBoardState });
});

module.exports = router
