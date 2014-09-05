/**
 * Created by User on 04.09.2014.
 */
/**
 * Created by User on 04.09.2014.
 */
var log = require("logger")(module);
var db = require('../db');
function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    log(db.get("Hello")+who.name);
}
console.log("index.js is required");
module.exports = User;