// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://simonwriter254:F4qrps84GaTXts2C@nextsaas.qtadcju.mongodb.net/?retryWrites=true&w=majority&appName=nextsaas';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db('eduassign');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
    throw error;
  }
}

module.exports = { connect };
