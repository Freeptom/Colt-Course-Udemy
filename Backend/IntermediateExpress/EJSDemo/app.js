var express = require('express');
var app = express();

app.use(express.static('public')); //use public directory too, not just views
app.set('view engine', 'ejs'); //use ejs files as standard, pages don't need suffix 'ejs'

app.get('/', function(req,res){
    res.render('home');
})

app.get('/fallinlovewith/:thing', function(req,res){
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get('/posts', function(req,res){
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Adobrable pet bunny', author: 'Phil'},
        {title: 'woo', author: 'Dave'}
    ];

    res.render('posts', {posts: posts});
})

app.listen(3000, process.env.IP, function(){
    console.log('server is listening');
})
