const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/travlr";

const connect = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Mongoose connected');
  } catch (err) {
    console.log('Mongoose connection error:', err);
  }
};

connect();

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

require('./travlr');
require('./user');