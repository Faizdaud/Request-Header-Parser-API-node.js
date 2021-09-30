var express = require('express'); // call express
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8080;


var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
    });

router.get('/whoami', function(req, res){
    var ipAdress = req.headers['x-forwarded-for'];
    var operatingSystem = req.headers['user-agent'];
    var langauge = req.headers["accept-language"];  
    res.json({
        ipAddress: ipAdress,
        operatingSystem: operatingSystem,
        language: langauge
    })
})

app.use('/', router);
app.listen(port);
console.log('Magic happens on port ' + port);