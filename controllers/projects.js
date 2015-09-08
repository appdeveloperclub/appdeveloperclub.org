var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var Project = require('../models/Project')
var secrets = require('../config/secrets');


/**
 * GET /
 * Home page.
 */
exports.getProjects = function(req, res) {
  var projectsFound = [];
  Project.find({}, function(err, projects) {
    projects.forEach(function(project) {
      projectsFound.push({
        title: project.title,
        date: project.date,
        description: project.description,
        platform: project.platform,
        projectPic: project.projectpic,
        teamMembers: project.teamMembers,
        projectID: project._id
      });
    });
    res.render('projects/explore_projects', {
      title: 'Explore Projects',
      pageBackground: 'projects-background',
      projects: JSON.stringify(projectsFound)
    });
  });
};


/**
 * GET /explore/projects/:projectID
 * Getting information on a single project.
 */
exports.getSoloProject = function(req, res) {
  var userID = req.params.memberID;
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
    res.render('members/solo_member', {
      title: 'Explore Members',
      pageBackground: 'general-background'
    });
  });
};