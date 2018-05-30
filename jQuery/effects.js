$('button').on('click',function(){
  $('div').slideToggle(1000, function(){
    $(this).remove();
  });
});


// the function after the timing of 1000 will be performed after the fadeOut, not instantly if it was on the next line

// $('button').on('click',function(){
//   $('div').fadeOut(1000, function(){
//     $(this).remove();
//   });
// });
