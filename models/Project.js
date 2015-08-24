var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  title: {type: String, default: '' },
  date : {type: Date, default: new Date() },
  description : {type: String, default: '' },
  platform: {type: String, default: ''},
  teamMembers: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);