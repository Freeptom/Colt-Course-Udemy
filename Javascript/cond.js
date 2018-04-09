var age = prompt("what is your age?");

if (age < 0) {
  console.log("Sorry, your age cannot be a negative number");
}

if (age === 21) {
    console.log("Happy 21st Birthday!");
  }

if (age % 2 !==0) {
  console.log("Your age is odd!");
}

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
}
else if (age < 21) {
  console.log("You can enter, but cannot drink");
}
else {
  console.log("Come on in. You can drink");
}
