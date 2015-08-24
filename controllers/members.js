/**
 * GET /
 * Home page.
 */
exports.getMembers = function(req, res) {
  res.render('members/explore_members', {
    title: 'Explore Members'
  });
};