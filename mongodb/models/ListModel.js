var mongoose = require('mongoose');
var ListSchema = require('../schemas/listSchema');
var List = mongoose.model('list',ListSchema);
module.exports = List;