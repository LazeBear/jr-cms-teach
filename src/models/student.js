const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: email => !Joi.validate(email, Joi.string().email()).error,
      msg: 'Invalid email format'
    }
  },
  courses: [{ type: String, ref: 'Course' }]
});

const model = mongoose.model('Student', schema);

module.exports = model;
