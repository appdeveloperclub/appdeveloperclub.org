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
        teamMembers: project.teamMembers
      });
    });
    res.render('projects/explore_projects', {
      title: 'Explore Projects',
      projects: JSON.stringify(projectsFound)
    });
  });
};