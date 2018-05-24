var colors = [
'rgb(255, 0, 0)', //All Red
'rgb(255, 255, 0)', //All Red and All Green
'rgb(0, 255, 0)', //All Green
'rgb(0, 255, 255)', //All Green and All Blue
'rgb(0, 0, 225)', //All Blue
'rgb(255, 0, 255)' //All Red and All Blue
]
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');


colorDisplay.textContent = pickedColor;// replace span with pickedColor

for(var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener('click', function() {
    // get color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
    }else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = 'Try again';
    }
  });
}

function changeColors (color) {
  // loop through all squares
  for(i = 0; i < colors.length; i++) {
      // change color for each to match given color
      squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
