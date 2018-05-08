//1. write function printReverse() which takes array as an argument and prints out the elements in reverse order

//printReverse([1,2,3,4]);
//4
//3
//2
//1
//**HINT - use a loop (forEach?)

console.log('printReverse');
function printReverse(arr) {
  for(var i = arr.length - 1; i >=0; i--){
    console.log(arr[i]);
  }
}
printReverse([3,6,2,5]);



//2. write function isUniform() - returns true if all elements in array are identical
//**HINT - use loop, and use variable which keeps track of first variable in index. Compare to next item in index. If not equal, escape.

console.log('isUniform');
function isUniform(arr) {
  //look at first index
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
  if(arr[i] !== first){
    return false;
    }
  }
    return true;
}

//3. write function sumArray() - accepts an array of numbers and returns the sum of all numbers in the array

//**Hint - use variable which holds result and constantly adds into it each time it loops

console.log('sumArray');
function sumArray(arr) {
  //look at first index
  var result = 0;
  sumArray.forEach(function(element) {
    result = result+element;
  });
  return result;
}

sumArray([1,2,3,4]);


//4. write function max() - accepts an array of numbers and returns the max number

//**Hint - use variable which holds max number
