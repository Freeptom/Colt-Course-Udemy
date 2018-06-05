var express = require('express');
var app = express();

// '/' => 'Hi there!'
app.get('/', function(req, res){
    res.send('hi there');
});

// '/bye' => 'goodbye!'
app.get('/bye', function(req, res){
    res.send('goodbye');
});
// '/cat' => 'Meow!'
app.get('/cat', function(req, res){
    res.send('MEOW');
});
app.listen(3000, process.env.IP, function(){
    console.log('server has started');
});