var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/blog_demo_2');

var Post = require('./models/post'); 
var User = require('./models/user');




// //create post
Post.create({
    title: 'How to cook the best burger pt. 4',
    content: 'htoijgern'
}, function(err, post){
    //find user
    User.findOne({email: 'bob@gmail.com'}, function(err,foundUser){
        if(err) {
            console.log(err)
        } else {
            //push post to foundUser
            foundUser.posts.push(post);
            //save User
            foundUser.save(function(err, data){
                if(err){
                    console.log(err)
                } else {
                    console.log(data);
                }
            })
        }
    });
});

// find user
//  User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
//  });




// find all post by user

