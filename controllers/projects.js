/**
 * GET /
 * Home page.
 */
exports.getProjects = function(req, res) {
  res.render('projects/explore_projects', {
    title: 'Explore Projects'
  });
};