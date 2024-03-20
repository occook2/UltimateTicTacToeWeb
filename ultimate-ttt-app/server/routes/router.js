const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');
const startController = require('../controllers/startController')

router.post('/move', boardController.handleMove);

router.post('/selectSymbol', startController.selectSymbol);

module.exports = router
