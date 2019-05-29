const mongoose = require('mongoose');

exports.connectToDB = () => {
  const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;
  // mongoose.set('debug', true);
  const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

  console.log(`Connecting to ${connectionString}`);
  mongoose.set('useFindAndModify', false);
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
};
