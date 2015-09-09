var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var Project = require('../models/Project');
var secrets = require('../config/secrets');


/**
 * GET /logout
 * Log out.
 */
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};


/**
 * GET /account
 * Profile page.
 */
exports.getAccount = function(req, res) {
  res.render('account/profile', {
    title: 'Account Management',
    pageBackground: 'general-background'
  });
};


/**
 * POST /account/profile
 * Update profile information.
 */
exports.postUpdateProfile = function(req, res, next) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
    user.email = req.body.email || '';
    user.profile.name = req.body.name || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';
    user.profile.tagline = req.body.tagline || '';
    user.profile.specialties = req.body.specialties || '';
    user.profile.blurb = req.body.blurb || '';

    user.save(function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Profile information updated.' });
      res.redirect('/account');
    });
  });
};


/**
 * GET /account/projects
 * Displays projects associated with user.
 */
exports.getProjects = function(req, res) {
  var projectsFound = [];
  Project.find({ teamMembers: req.user.id }, function(err, projects) {
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

    res.render('account/projects', {
      title: 'Your Projects',
      pageBackground: 'general-background',
      projects: JSON.stringify(projectsFound)
    });
  });
};


/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeleteAccount = function(req, res, next) {
  User.remove({ _id: req.user.id }, function(err) {
    if (err) return next(err);
    req.logout();
    req.flash('info', { msg: 'Your account has been deleted.' });
    res.redirect('/');
  });
};


/**
 * GET /account/projects/new
 * Display new project creation page.
 */
exports.getNewProject = function(req, res) {
  res.render('account/new_project', {
    title: 'Create a New Project',
    pageBackground: 'general-background'
  });
};


/**
 * POST /account/projects/new
 * Create a new project.
 */
exports.postNewProject = function(req, res, next) {
  req.assert('title', 'Must have a valid title').notEmpty();
  req.assert('platform', 'Must have a valid platform target').notEmpty();
  req.assert('website', 'Must have a valid website').notEmpty();
  req.assert('description', 'Description must not be empty').notEmpty();
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/account/projects/new');
  }

  var project = new Project({
    title: req.body.title,
    platform: req.body.platform,
    website: req.body.website,
    description: req.body.description,
    teamMembers: [req.user._id]
  });

  Project.findOne({ title: req.body.title }, function(err, existingProject) {
    if (existingProject) {
      req.flash('errors', { msg: 'Project with that title already exists.' });
      return res.redirect('/account/projects/new');
    }

    project.save(function(err) {
      if (err) return next(err);
      res.redirect('/account/projects');
    });
  });
};


/**
 * GET /account/projects/:projectID
 * Displays a solo project for creator editing.
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
      projectPic: project.projectpic,
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

        res.render('account/solo_project', {
          title: 'Account Project',
          pageBackground: 'projects-background',
          projectFound: JSON.stringify(projectFound),
          teamMembers: JSON.stringify(teamMembersFound)
        });
      });
    });
  });
};