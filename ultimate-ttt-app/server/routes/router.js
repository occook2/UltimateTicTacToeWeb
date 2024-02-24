const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

router.post('/move', boardController.handleMove);

module.exports = router
