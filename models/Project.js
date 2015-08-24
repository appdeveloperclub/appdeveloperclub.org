var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  title: {type: String, default: '' },
  date : {type: Date, default: new Date() },
  user: {type: String, default: '' },
  description : {type: String, default: '' },
  userID: {type: String, default: ''},
});

module.exports = mongoose.model('Project', ProjectSchema);