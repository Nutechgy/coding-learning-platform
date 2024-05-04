const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRouter = require('../routes/users');
const postsRouter = require('../routes/posts');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
