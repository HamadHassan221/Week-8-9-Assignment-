//1- Write a program that allow to user enter number then print it

var number = window.prompt("Enter A Number");
console.log(+number); 

/*2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */

var number = window.prompt("Enter A Number Is Divisible By 3 And 4");

if (number % 3 == 0 && number % 4 == 0) {
  console.log("Yes");
} else {
  console.log("No");
}

//3- Write a program that allows the user to insert 2 integers then print the max

 var number1 = window.prompt("Enter A Number 1...");
 var number2 = window.prompt("Enter A Number 2...");

if (number1 > number2) {
  console.log(number1);
} else if (number2 > number1) {
  console.log(number2);
}

/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive. */

var number = window.prompt(
  "Enter A Number To Know If It Is Positive Or Negative..."
);
 if (number >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

/*5- Write a program that take 3 integers from user then print the max element
and the min element.*/

 var number1 = +window.prompt("Enter A Number 1");
 var number2 = +window.prompt("Enter A Number 2");
 var number3 = +window.prompt("Enter A Number 3");

if (number1 > number2 && number1 > number3) {
  console.log("Max Number Is " + number1);
} else if (number2 > number1 && number2 > number3) {
  console.log("Max Number Is " + number2);
} else if (number3 > number1 && number3 > number2) {
  console.log("Max Number Is " + number3);
} else {
  console.log("All Numbers Are Equal");
}

//6- Write a program that allows the user to insert integer number then check If a number is even or odd

var number = window.prompt("Enter a Number To Check is Even Or Odd");

if (number % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}


//7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

 var str = window.prompt("Enter a Letter To Check Is It Vowel Or Consonant");

if (
  str == "a" ||
  str == "e" ||
  str == "i" ||
  str == "o" ||
  str == "u" ||
  str == "A" ||
  str == "E" ||
  str == "I" ||
  str == "O" ||
  str == "U"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

//8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

var num = window.prompt("Enter A Number");
for (var i = 1; i <= num; i++) {
  console.log(i);
}

//9- Write a program that allows user to insert integer then print a multiplication table up to 12.

var num = window.prompt("Enter A Number");
for (var i = 1; i <= 12; i++) {
  console.log(num * i);
}


//10- Write a program that allows user to insert integer then print sum of all numbers between 1 to that’s number

var num = window.prompt("Enter A Number");
for (var i = 2; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


//11-Write a program that take two integers then print the power

var num = window.prompt("Enter A Number");
var power = window.prompt("Enter The Power");

for (var i = 1; i <= power; i++) {
  console.log(num ** i);
}


//12- Write a program to enter marks of five subjects and calculate total, average and percentage.

var subject1 = +window.prompt ("Enter Subject 1 Marks");
var subject2 = +window.prompt ("Enter Subject 2 Marks");
var subject3 = +window.prompt ("Enter Subject 3 Marks");
var subject4 = +window.prompt ("Enter Subject 4 Marks");
var subject5 = +window.prompt ("Enter Subject 5 Marks");

var total = (subject1 + subject2 + subject3 + subject4 + subject5);
var average = total / 5;
var percentage = (total / 500) * 100;

console.log("Total is " + total);
console.log("Average is " + average);
console.log("Percentage is " + percentage);


//13-Write a program to input month number and print number of days in that month.

var monthNum = +window.prompt("Enter A Month Number");

if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12) {
  console.log("31 Days");
}
else if(monthNum == 2) {
  console.log("28 or 29 Days");
}
else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
  console.log("30 Days");
}
else{
  console.log("Invalid Month Number");
}


//14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade

var Physics = +window.prompt("Enter Physics Marks");
var Chemistry = +window.prompt("Enter Chemistry Marks");
var Biology = +window.prompt("Enter Biology Marks");
var Mathematics = +window.prompt("Enter Mathematics Marks");
var Computer = +window.prompt("Enter Computer Marks");
var total = Physics + Chemistry + Biology + Mathematics + Computer;
var percentage = (total / 500) * 100;

if (percentage >= 90) {
  console.log("Grade A");
}
else if(percentage >= 80) {
  console.log("Grade B");
}
else if (percentage >= 70) {
  console.log("Grade C");
}
else if (percentage >= 60) {
  console.log("Grade D");
}
else if (percentage >= 40) {
  console.log("Grade E");
}
else {
  console.log("Grade F");
}


//15- Write a program to print total number of days in month

var monthNum = +window.prompt("Enter A Month Number");

switch (monthNum){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 Days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 Days");
    break;
  case 2:
    console.log("28 or 29 Days");
    break;
  default:
    console.log("Invalid Month Number");
}


//16- Write a program to check whether an alphabet is vowel or consonant

var str = window.prompt("Enter a Letter To Check Is It Vowel Or Consonant");

switch (str){
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}


//17- Write a program to find maximum between two numbers

var number1 = +window.prompt("Enter A Number 1");
var number2 = +window.prompt("Enter A Number 2");

switch (true) {
  case number1 > number2:
    console.log(number1);
    break;
  case number2 > number1:
    console.log(number2);
    break;
  default:
    console.log("Both Numbers Are Equal");
}


//18- Write a program to check whether a number is even or odd

var number = +window.prompt("Enter a Number To Check is Even Or Odd");

switch (true){
  case number % 2 == 0:
    console.log("Even Number");
    break;
  default:
    console.log("Odd Number");
}


//19- Write a program to check whether a number is positive or negative or zero

var number = +window.prompt("Enter A Number To Know If It Is Positive Or Negative..."
);

switch(true){
  case number > 0:
    console.log("Positive");
    break;
  case number < 0:
    console.log("Negative");
    break;          
  default:
    console.log("Zero");
}

//20- Write a program to create Simple Calculator

var number1 = +window.prompt("Enter A Number 1");
var operation = window.prompt("Enter The Operation (+, -, *, /)");
var number2 = +window.prompt("Enter A Number 2");

switch (operation) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "/":
    console.log(number1 / number2);
    break;
  default:
    console.log("Invalid Operation");
}

