var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    usertype: String,
    active: Boolean,
    changePwOnLogin: Boolean,
    agentAbbrev : String,
    agentFirstName : String,
    agentLastName : String,
    agentPosition : String,
    agentPhone : String,
    createdBy : String,
    createDate : Object
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);