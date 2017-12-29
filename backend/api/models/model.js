'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the post'
  },
  body: {
    type: String,
    required: 'Blog posts must have a body'
  },
  author: {
    type: String,
    default: "Board"
  },
  image_src:{
    type: String,
    default: ""
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('posts', postSchema);
