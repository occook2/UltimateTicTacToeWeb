const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', router);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../build')));

// Serve the API
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the Ultimate Tic-Tac-Toe API!' });
});

// Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = 4000;
const server = app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
