// fizz buzz program
// When a user inputs a number, print till the inputed number
// if the number is divisible by 3 print 'fizz'
// if the number is divisible by 5 print 'buzz'
// if the number is divisible by both 3 and 5 print 'fizzbuzz'
let number = parseInt(prompt("Please enter the number to fizzbuzz upto: "));

for (let index = 1; index <= number ; index++) {
  if (index % 3 === 0 && index % 5 === 0){
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log('Fizz');
  } else if (index % 5 === 0){
    console.log('Buzz');
  } else{
    console.log(index);
  }
}

