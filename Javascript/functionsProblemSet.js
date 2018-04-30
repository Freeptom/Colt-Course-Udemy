
// console.log("isEven?");
// function isEven(num){
//   if(num % 2 === 0) {
//   return num + " is even!";
//   }
//   else {
//     return num + " is not even";
//   }
// };

//refactor
console.log("isEven?");
function isEven(num){
  return num % 2 ===0;
}


//e.g. 6 is 6 x 5 x 4 x 3 x 2 x 1 so, number multiplied by every number
//below that. Factorial of 0 is 1.
console.log("Factorial");
function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store the value in a result
  for(var i = 2; i <= num; i++) {
    result *=  i;
  }
  //return the result variable
  return result;
}
//factorial(4) 4 x 3 x 2 x 1


//kebabToSnake() take single kebab-cased sring argument and returns the snake_case version
console.log("Kebab to Snake");
function kebabToSnake(str) {
    //replace all '-' with '_'
  var newStr = str.replace(/-/g , "_");
  //return str
  return newStr;

}
