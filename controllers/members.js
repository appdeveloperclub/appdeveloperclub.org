var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var User = require('../models/User');
var Project = require('../models/Project');
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
  var associatedProjects = [];
  var projectsFound = [];

  User.findOne({'_id': userID}, function(err, user) {
    var userFound = {
      name: user.profile.name,
      website: user.profile.website,
      email: user.email,
      propic: user.gravatar(),
      tagline: user.profile.tagline,
      specialties: user.profile.specialties,
      blurb: user.profile.blurb
    };

    Project.find({ teamMembers: user._id }, function(err, projects) {
      projects.forEach(function(project) {
        projectsFound.push({
          title: project.title,
          date: project.date,
          description: project.description,
          platform: project.platform,
          projectPic: project.projectpic,
          teamMembers: project.teamMembers
        });
      });

      res.render('members/solo_member', {
        title: 'Explore Members',
        userFound: JSON.stringify(userFound),
        projects: JSON.stringify(projectsFound)
      });
    });
  });
};