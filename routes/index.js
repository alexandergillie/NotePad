var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', {
    root: 'public'
  });
});

// router.get('/getcity', function(req, res, next) {
//   var myRe = new RegExp("^" + req.query.q.toLowerCase());
//   console.log(myRe);
//
//   fs.readFile(__dirname + '/cities.dat.txt', function(err, data) {
//     if (err) throw err;
//     var cities = data.toString().split('\n');
//     var jsonresult = [];
//     for (var i = 0; i < cities.length; i++) {
//       var result = cities[i].toLowerCase().search(myRe);
//       if (result != -1) {
//         console.log(cities[i]);
//         jsonresult.push({
//           city: cities[i]
//         });
//       }
//     }
//     res.status(200).json(jsonresult);
//   });
// });
//
// router.get('/getword', function(req, res, next) {
//   console.log('in getword');
//
//   var owl = "https://owlbot.info/api/v1/dictionary/";
//   owl+=req.query.q.toLowerCase();
//   request(owl).pipe(res);
// });

/*
router.get('/getdef', function(req, res, next) {
  var word = req.query.w.toLowerCase();
  http.get('https://owlbot.info/api/v1/dictionary/' + word, function(response) {
    console.log(response);
  })
})        */

module.exports = router;
