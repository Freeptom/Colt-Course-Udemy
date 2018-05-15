var tag = document.getElementById('highlight');

var tags = document.getElementsByClassName('bolded');
console.log(tags[0]);

var tagsTagName = document.getElementsByTagName('li');
console.log(tagsTagName[0]);

//query selector which replicates all of the above with one method. Returns only one element

var tagQuery = document.querySelector('#highlight');

 // same as above but gets all

var tagQueryAll = document.querySelectorAll('.bolded');
