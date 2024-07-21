const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug')('development:mongoose');

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(() => {
    debug('Successfully connected to MongoDB');

  })
  .catch((err) => {
    debug('Error connecting to MongoDB:', err);

  });

module.exports = mongoose.connection;
