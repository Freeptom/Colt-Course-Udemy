var tag = document.getElementById('highlight');

var tags = document.getElementsByClassName('bolded');
console.log(tags[0]);

var tagsTagName = document.getElementsByTagName('li');
console.log(tagsTagName[0]);

//query selector which replicates all of the above with one method. Returns only one element

var tagQuery = document.querySelector('#highlight');

 // same as above but gets all

var tagQueryAll = document.querySelectorAll('.bolded');


//come up wih 4 different ways to select first <p> tags

var selectOne = document.getElementById('first');
var selectTwo = document.getElementsByClassName('special')[0];
var selectThree = document.querySelector('#first');
var selectFour = document.querySelector('.special');
var selectFive = document.getElementsByTagName('p')[0];
