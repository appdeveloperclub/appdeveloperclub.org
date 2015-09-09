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
        website: project.website,
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
  var projectID = req.params.projectID;
  var teamMembersFound = [];

  Project.findOne({'_id': projectID}, function(err, project) {
    var projectFound = {
      title: project.title,
      date: project.date,
      description: project.description,
      platform: project.platform,
      website: project.website,
      teamMembers: project.teamMembers,
      projectID: project._id
    };

    User.find({ '_id': {'$in': projectFound.teamMembers}}, function(err, teamMembers) {
      teamMembers.forEach(function(teamMember) {
        teamMembersFound.push({
          name: teamMember.profile.name,
          website: teamMember.profile.website,
          propic: teamMember.gravatar(),
          tagline: teamMember.profile.tagline,
          specialties: teamMember.profile.specialties,
          memberID: teamMember._id
        });

        res.render('projects/solo_project', {
          title: 'Explore Projects',
          pageBackground: 'projects-background',
          projectFound: JSON.stringify(projectFound),
          teamMembers: JSON.stringify(teamMembersFound)
        });
      });
    });
  });
};