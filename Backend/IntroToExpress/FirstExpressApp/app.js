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
app.get('/dog', function(req, res){
    res.send('MEOW');
});

app.get('/r/:subredditName', function(req, res){
    var subreddit = req.params.subredditName;
    res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT!');
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res){
    console.log(req.params);
    res.send('Welcome to the comments page!');
});

app.get('*', function(req, res){
    res.send('You are a star');
});


app.listen(3000, process.env.IP, function(){
    console.log('server has started');
});