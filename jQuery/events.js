// clicked

$('button').click(function(){
  var text = $(this).text();
  console.log('You clicked ' + text);
})

// key-press

$('input[type = "text"]').keypress(function(e){
  if(e.which === 13){
    alert('you hit enter');
  }
});

// on

$('input[type = "text"]').on('keypress', function(){
  console.log('keypressed!');

});

$('button').on('mouseenter', function(){
  $(this).css('font-weight','bold');
})
$('button').on('mouseleave', function(){
  $(this).css('font-weight','normal');
})
