const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Change this to your MongoDB URI

// Database Name
const dbName = 'brewVerse'; // Change this to your database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');

    // Get the database
    const db = client.db(dbName);

    // Get the collection
    const collection = db.collection('userData'); // Change this to your collection name

    // Data to insert
    const dataToInsert = {
      id: "uniqueId",
      name: "Brewery Name",
      location: "Brewery Location",
      ratings: [
        {
          user: "username",
          comment: "Sample comment",
          rating: 5
        }
      ]
    };

    // Insert one document
    collection.insertOne(dataToInsert)
      .then(result => {
        console.log('Document inserted:', result.insertedId);
      })
      .catch(err => {
        console.error('Error inserting document:', err);
      })
      .finally(() => {
        // Close the connection
        client.close();
      });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

