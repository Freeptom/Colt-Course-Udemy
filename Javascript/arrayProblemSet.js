//1. write function printReverse() which takes array as an argument and prints out the elements in reverse order


console.log('printReverse');
function printReverse(arr) {
  for(var i = arr.length - 1; i >=0; i--){
    console.log(arr[i]);
  }
}
printReverse([3,6,2,5]);



//2. write function isUniform() - returns true if all elements in array are identical

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



console.log('sumArray');
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
   total+=element;
  });
  return total;
}

sumArray([1,2,3,4]);


//4. write function max() - accepts an array of numbers and returns the max number

// console.log('max');
// function max(arr) {
//   var max = 0;
//   arr.forEach(function(element) {
//    if (element > max) {
//      max = element;
//    }
//   });
//   return max;
// }
//
//
//
// max([1,2,6,4]);

console.log('max');
function max(arr) {
  var max = arr[0];
  for(var i = 1; i < array.length; i++){
    if(arr[i] > max){
    max = arr[i];
    }
  }
  return max;
}
