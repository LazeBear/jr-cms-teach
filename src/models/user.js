const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

schema.methods.hashPassword = async function() {
  this.password = await bcrypt.hash(this.password, 10);
};

schema.methods.validatePassword = async function(password) {
  const validPassword = await bcrypt.compare(password, this.password);
  return validPassword;
};

const model = mongoose.model('User', schema);

module.exports = model;
