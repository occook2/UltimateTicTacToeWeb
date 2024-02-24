const express = require('express')
const router = express.Router()

router.post('/move', (req, res) => {
    // Extract data from the request body
    const { boardState, nextMoveAddress } = req.body;

    // Updat boardState - call a controller
    var updatedBoardState = boardState;

    // Send back the updated board state or any other response
    res.status(200).json({ updatedBoardState });
});

module.exports = router
