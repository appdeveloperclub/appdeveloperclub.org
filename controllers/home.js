var request = require('request');
var cheerio = require('cheerio');

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    pageBackground: 'homepage-background'
  });
};