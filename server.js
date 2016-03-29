var express = require("express");
var app  = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ipadr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
     if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      return res.end();
    } else {
      return next();
    }
  });

app.use(express.static(__dirname ));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.listen(port,function(){
          console.log("All right ! I am alive at Port '"+port+"'.");
      });