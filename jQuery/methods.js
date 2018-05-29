
$('img').css('width','200px');


// attr
$('img:first-of-type').attr('src','https://i.imgur.com/IlLEWOC.jpg');
$('img').last().attr('src','https://i.imgur.com/IlLEWOC.jpg');

// val
$('input').val('');

// val of select
$('select').val('');


//addClass
$('h1').addClass('correct');


//remove class
$('h1').removeClass('correct');

$('li').first().toggleClass('done');
$('li').toggleClass('done');
