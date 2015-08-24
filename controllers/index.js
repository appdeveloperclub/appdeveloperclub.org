var request = require('request');
var cheerio = require('cheerio');

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('index', {
    title: 'Index'
  });
};

/**
 * POST /
 * Return whether the user is a valid stanford affiliate.
 */
exports.getemailtest = function(req, res) {
  request.post({
    url:'https://stanfordwho.stanford.edu/SWApp/Search.do',
    form: {search: req.query.query}
  }, function (err, httpResponse, body) {
    if (err) {
      console.log("Could not reach servers at Stanford WHO");
      return console.error('Request failed with error:', err);
    }
    var $ = cheerio.load(body);
    var name = $('#PublicProfile h2').text().trim();
    res.end(name);
  });
}