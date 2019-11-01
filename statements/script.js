/*
Outputting results with alert, document.write() and console.log() methods
We are outputting Hello World!
*/
alert("Hello World!"); //alert() method
document.write('Hello World!'); //document.write() method
console.log('Hello World!'); //console.log() method

document.write('Hello World');
document.write('Here comes the JS Engineer');

//varaibles
// var keyword
var score = 80;
if (score == 80) {
  var grade = 'A';
}
console.log(grade);

//let keyword (it's a block scope variable)
let score2 = 50;
// let grade2;
let grade2 = 'F';
if (score2 == 50) {
  grade2 = 'C';
}
console.log(grade2);

//const keyword (it's a block scope variable and it's value can't be changed)
const score3 = 60;
if (score3 == 60) {
  const grade3 = 'C';
  console.log(grade3);
}

//data types
//string data type
document.write('<br>')
document.write('This is my father\'s farm');
document.write('<br>')
document.write("\"Boko Haram has been technically defeated\", said Lai Mohammed");

//Boolean data type
console.log(Boolean(false));

//concatenation operator
let firstName = 'John';
let lastName = 'Joe';
let jobTitle = 'IT Consultant';
let age = 50;
let description = firstName+' '+lastName+' is an '+jobTitle+'. He is '+age+' years old.';
console.log(description);

//using template literal
firstName = 'Jane';
let newDescription = `${firstName} ${lastName} is an ${jobTitle}. He is ${age} years old.`;
console.log(newDescription);


//arithemetic operators
// let firstNum = 3;
// let secondNum = 9;
let firstNum = 3, secondNum = 9;
//addition
let sum = firstNum + secondNum;
console.log(sum);

//subtraction
let diff = secondNum - firstNum;
console.log(diff);

//division
let result = secondNum / firstNum;
console.log(result);

//multiplication
let answer = secondNum * firstNum;
console.log(answer);

//modulo
let remainder = 5 % 2;
console.log(remainder);


//comparison operators
//greater than (>)
let numOne = 5, numTwo = 10;
console.log(Boolean(numTwo > numOne)); //true

//less than(<)
console.log(Boolean(numTwo < numOne)); //false

//greater than or equal to (>=)
console.log(Boolean(numTwo >= 10)); //true

//less than or equal to (<=)
console.log(Boolean(numOne <= 5)); //true

//soft equality(==)
//this checks for values only
console.log(Boolean(numOne == 5)); //true
console.log(Boolean(numOne == '5')); //true

//strict equality(===)
//this checks for values and data types
console.log(Boolean(numOne === 5)); //true
console.log(Boolean(numOne === '5')); //false

//soft inequality(!=)
//this checks for values only
console.log(Boolean(numOne != 5)); //false
console.log(Boolean(numOne != '5')); //false

//strict inequality(!==)
//this checks for values and data types
console.log(Boolean(numOne !== 5)); //false
console.log(Boolean(numOne !== '5')); //true

//Logical operators
//AND Logical operator (&&)
//this returns true if all the conditions are true
//returns false if at least one of the conditions is false
console.log(Boolean(numOne === 5 && numTwo == '10' && numOne > numTwo)); //false

//OR Logical operator (||)
//returns true if at least one of the conditions is true
//returns false if all conditions are false
console.log(Boolean(numOne === 5 || numTwo == '10' || numOne > numTwo)); //true

// NOT Logical operator (!)
//returns an opposite boolean value
console.log(Boolean(!(numOne === 5 || (numTwo == '10' && numOne > numTwo)))); //false
