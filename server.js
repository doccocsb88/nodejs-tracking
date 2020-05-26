// var express = require('express');
// var app = express();
// var fs = require("fs");
// var firebase = require("firebase/app");
// var firebaseConfig = {
//   // ...
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// //

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// })

// var user = {
//    "user4" : {
//       "name" : "mohit",
//       "password" : "password4",
//       "profession" : "teacher",
//       "id": 4
//    }
// }

// app.post('/addUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       data["user4"] = user["user4"];
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// //
// app.get('/:id', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       var users = JSON.parse( data );
//       var user = users["user" + req.params.id] 
//       console.log( user );
//       res.end( JSON.stringify(user));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Address = require('./api/models/addressModel'), //created model loading here
  // cors = require('cors'),
  bodyParser = require('body-parser');
  

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/Tododb",);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});
var routes = require('./api/routes/eventRoutes'); //importing route
routes(app); //register the route
// var addressRouter = require('./api/routes/addressRouters');
// routes(addressRouter);


app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('todo list RESTful API server started on: ' + port);