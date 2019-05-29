const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      uppercase: true,
      alias: 'code' // virtual `code` property
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    __v: { type: Number, select: false }, // hide version
    createdAt: { type: Date, select: false }
  },
  {
    timestamps: true, // show timestamp
    toJSON: {
      virtuals: true // required to show 'code' property
    },
    id: false // hide `id` virtual property
  }
);

const model = mongoose.model('Course', schema);

module.exports = model;
