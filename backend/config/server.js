const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRouter = require('../routes/users');
const postsRouter = require('../routes/posts');
const connection = require('./config/connection');
const port = 3000; // You can change this to any port you prefer/

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI) ;


// Middleware to parse JSON bodies
app.use(express.json());

//Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
