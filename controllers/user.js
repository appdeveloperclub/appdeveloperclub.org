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
    title: 'Account Management'
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
        teamMembers: project.teamMembers
      });
    });
    res.render('account/projects', {
      title: 'Your Projects',
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