(function() {
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();

  app.set('port', 8000);
  app.use(express.static(__dirname + '/app'));  
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({extended:true}));

  app.post('/', function(req, res){
    // var paramObj = req.body.dataObj;

  });

  // connection and express server
  console.log('Connection established');
  app.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });

}).call(this);
