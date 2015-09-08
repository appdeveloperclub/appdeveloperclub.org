var request = require('request');
var cheerio = require('cheerio');

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  if (req.user)
    return res.redirect('/home');
  res.render('index', {
    title: 'Index'
  });
};

/**
 * POST /
 * Return whether the user is a valid stanford affiliate.
 */
exports.getemailtest = function(req, res) {
  var params = {
    url:'https://stanfordwho.stanford.edu/SWApp/Search.do',
    form: {search: req.query.query}
  };

  request.post(params, function (err, httpResponse, body) {
    if (err)
      return console.error('Request failed with error:', err);
    var $ = cheerio.load(body);
    var name = $('#PublicProfile h2').text().trim();
    res.end(name);
  });
}