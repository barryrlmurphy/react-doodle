var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use(bodyParser.json());

var printBody = function(req, res){
  console.log(req.body);
  res.send('Done!');
}

router.route('/').post(printBody);

app.use(router);

app.listen(3000, '127.0.0.1', function(){
  console.log('listening!');
});
