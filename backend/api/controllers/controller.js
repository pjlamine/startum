'use strict';


var mongoose = require('mongoose'),
  post = mongoose.model('posts');

exports.list_all_posts = function(req, res) {
  post.find({}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.create_a_post = function(req, res) {
  var new_post = new post(req.body);
  new_post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.read_a_post = function(req, res) {
  post.findById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.update_a_post = function(req, res) {
  post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.delete_a_post = function(req, res) {

  post.remove({
    _id: req.params.postId
  }, function(err, post) {
    if (err)
      res.send(err);
    res.json({ message: 'post successfully deleted' });
  });
};
