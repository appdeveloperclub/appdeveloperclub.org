var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var User = require('../models/User');
var secrets = require('../config/secrets');

/**
 * GET /explore/members
 * Exploring members.
 */
exports.getMembers = function(req, res) {
  var members = [];
  User.find({}, function(err, users) {
    users.forEach(function(user) {
      members.push({
        name: user.profile.name,
        website: user.profile.website,
        propic: user.gravatar(),
        tagline: user.profile.tagline,
        specialties: user.profile.specialties,
        memberID: user._id
      });
    });
    res.render('members/explore_members', {
      title: 'Explore Members',
      members: JSON.stringify(members)
    });
  });
};

/**
 * GET /explore/members/:memberID
 * Getting information on a single member.
 */
exports.getSoloMember = function(req, res) {
  var userID = req.params.memberID;

  User.findOne({'_id': userID}, function(err, user) {
    console.log(user.profile.name);
    res.render('members/solo_member', {
      title: 'Explore Members',
    });
  });
};