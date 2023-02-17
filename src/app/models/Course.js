const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255},
    description: {type: String, maxlength: 900},
    image: { type: String, maxlength:255},
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
  });


  module.exports = mongoose.model('Course', Course);