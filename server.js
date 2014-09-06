var log = require('./logger')(module);
var db = require("./db");
db.connect();
var User = require('./user/index');

var q = new User("Вася");
var w = new User("Петя");

log(db.get("Run successful"));

q.hello(w);

