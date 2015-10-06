var request = require('request');
var cheerio = require('cheerio');


/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    pageBackground: 'general-background'
  });
};


/**
 * POST /
 * Allow user to sign in, using Github OAuth
 */
exports.getemailtest = function(req, res) {
  var params = {
    url:'https://stanfordwho.stanford.edu/SWApp/Search.do',
    form: {search: req.query.query}
  };

  request.post(params, function (err, httpResponse, body) {
    if (err) return console.error('Request failed with error:', err);
    var $ = cheerio.load(body);
    var name = $('#PublicProfile h2').text().trim();
    res.end(name);
  });
}


/**
 * GET /explore/core
 * Informational page for Core ADC.
 */
exports.getCore = function(req, res) {
  res.render('about/core', {
    title: 'Explore Core',
    pageBackground: 'general-background'
  });
};


/**
 * GET /explore/advisors
 * Another info page for ADC advisors.
 */
exports.getAdvisors = function(req, res) {
  res.render('about/advisors', {
    title: 'Explore Board of Advisors',
    pageBackground: 'general-background'
  });
};