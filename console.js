var repl = require("repl");

var db = require('./models/index');
var replServer = repl.start({});

// // connect to database
// db.connect(epa.mongo, function(err){
//   if (err){ throw err; }
//   // open the repl session
//   var replServer = repl.start({});
//
//   // attach modules to the repl context
//   replServer.context.db = db;
// });
