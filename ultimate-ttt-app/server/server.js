const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Serve static files from the client/public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define routes and middleware here

// Catch-all route to serve the index.html file for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});


  