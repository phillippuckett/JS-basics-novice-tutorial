/*Once you complete a problem, open up Chrome and check the answer in the console.*/
http://javascriptissexy.com/understand-javascript-closures-with-ease/

// 1 //
var outer = function () {
  var name = "Phillip";
  return function () {
    return 'The original name was ' + name;
  }
};
/*Above you're given a function that returns another function 
which has a closure over the name variable.
Invoke outer saving the return value into another variable called 'inner'.*/
var inner = outer();
//Once you do that, invoke inner.
inner();

// 2 //
var callFriend = function () {
  var friend = 'Jake';
  function call(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return call;
};
/*Above you're given a callFriend function that returns another function.
Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.*/
var jakesCell = callFriend();
jakesCell('435-215-9248');

// 3 //
/*Write a function called makeCounter that makes the following code work properly.*/
var makeCounter = function () {
  var num = 1;
  return function myCount() {
    return (num++);
  }
}
var count = makeCounter();
count() // 1
count() // 2
count() // 3
count() // 4

// 4 //
/*Write a function that does something simple (console, alert, etc).*/
var consoleFn = function () {
  console.log('Success!');
};
/*Write a second function that accepts the first function as it's first parameter.*/
/*The second function should return a new third function*/
var makeSingleUse = function (cbFunction) {
  /*when invoked, the third function invokes the first*/
  var x = 0;
  return function () {
    /*original function that was passed in, but will only ever do so once.*/
    if (x < 1) {
      x++;
      cbFunction();
    }
  };
};
var callMeOnce = makeSingleUse(consoleFn);

callMeOnce();
/*Run it one more time to see if it stops after 1x*/
callMeOnce();

// 5 //
/*Write a function called 'fnCounter' that accepts two parameters.*/
/*The first parameter will be an anonymous function and the second parameter, 'N', will be a number.*/
/*Now, in 'fnCounter', allow the anonymous function to be invoked 'N' number of times.*/
/*After it's been invoked 'N' number of times, return 'STOP'.*/
var fnCounter = function (callBack, N) {
  for (var i = 0; i < N; i++) {
    callBack();
  }
  return "STOP";
};
 
// 6 //  
var counter = function () {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  }
};
// counter();
/*Above you have a function named counter. Examine the function (without running the code) 
then below write what you expect to happen when the funciton is invoked. 
*Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.*/
// Counter will console.log "1" after one second, "2" after two seconds and so on until it hits five seconds.

/*Now, run the function in your console and note what happpens.*/
// Not quite, it just revealed all of the numbers at once, instead of adding up as the seconds passed

/*Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)*/
/*(stack overflow for this --> http://stackoverflow.com/questions/20384719/why-does-javascript-settimeout-not-work-in-a-loop)*/
var counter = function(){
    for (var i = 1; i <= 5; i++) {
      setTimeout( (function(i) { 
          return function timer() {
            console.log(i);
          }
      })(i), i * 1000 );
    }
  };
  counter();

// 7 //
/*Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.*/
var funcArray = [
    function() {console.log(0)},
    function() {console.log(1)},
    function() {console.log(2)},
    function() {console.log(3)},
    function() {console.log(4)},
    function() {console.log(5)},
];

