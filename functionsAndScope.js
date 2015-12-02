//Once you complete a problem, open up Chrome and check the answer in the console.

// 1 //
/*Create a function called isTyler that accepts name as it's only argument.
If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.*/
var name = 'Tyler';
var isTyler = function (name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
};
isTyler();

// 2 //
/*Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.*/
var getName = function () {
  prompt("What do they call you, boy?");
  return 'Phillip';
};
// getName();
/*Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
then alerts "Welcome, " plus whatever the users name is.*/
var welcome = function () {
  alert("Welcome, " + getName());
};
welcome();

// 3 //
/*What is the difference between arguments and parameters?*/
//A parameter is what appears in the definition of the method. 
//An argument is the instance passed to the method during runtime

// 4 //
/*What are all the falsy values in JavaScript and how do you check if something is falsy?*/
// false.
// 0 (zero)
// "" (empty string)
// null.
// undefined.
// NaN (a special Number value meaning Not-a-Number!)

// 5 //
/*Create a function called myName that returns your name*/
var myName = function () {
  return "Phillip";
};
/*Now save the function definition of myName into a new variable called newMyName*/
var newMyName = myName();
/*Now alert the result of invoking newMyName*/
alert(newMyName);

// 6 //
/*Create a function called outerFn which returns an anonymous function which returns your name.*/
var outerFn = function () {
  return function () {
    return "Phillip";
  }
};
/*Now save the result of invoking outerFn into a variable called innerFn.*/
var innerFn = outerFn();
/*Now invoke innerFn.*/
innerFn();