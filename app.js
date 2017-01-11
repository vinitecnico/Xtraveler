var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/img',  express.static(__dirname + '/img'));
app.use('/css',  express.static(__dirname + '/css'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

var server = app.listen(8081, function () {
   var host = 'localhost';
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

});