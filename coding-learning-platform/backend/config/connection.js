const { MongoClient } = require('mongodb');

// Connection URI for MongoDB
const uri = 'mongodb://localhost:27017/mydatabase';

// Function to connect to the database
async function connectToDatabase() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // Added missing part
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
