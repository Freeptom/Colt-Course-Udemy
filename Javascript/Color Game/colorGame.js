var colors = [
'rgb(255, 0, 0)', //All Red
'rgb(255, 255, 0)', //All Red and All Green
'rgb(0, 255, 0)', //All Green
'rgb(0, 255, 255)', //All Green and All Blue
'rgb(0, 0, 225)', //All Blue
'rgb(255, 0, 255)' //All Red and All Blue
]
var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares

  squares[i].addEventListener('click', function() {
    // get color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if(clickedColor === pickedColor){
      alert('correct!')
    }else {
      alert('Wrong!')
    }
  });
}
