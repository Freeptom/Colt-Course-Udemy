var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');


mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model('campground', campgroundSchema);

Campground.create(
    {
        name: "Granite Hill", 
        image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg'
    }, 
    function(err, campground){
        if(err){
            console.log(err);
         } else {
        console.log('Newly Created Campground: ');
        console.log(campground);
        }
    });


var campgrounds = [
    {name: "Salmon Creek", image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_960_720.jpg'},
    {name: "Granite Hill", image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg'},
    {name: "Mountain Goat's Rest", image: 'https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg'}
]


app.get('/', function(req, res){
    res.render('landing')
});

app.get('/campgrounds', function(req, res){
  

    res.render('campgrounds', {campgrounds: campgrounds});
});


app.post('/campgrounds', function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground =  {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req,res){
    res.render('new.ejs');
});

app.listen(3000, function(){
    console.log('The YelpCamp Server Has Started!');
});