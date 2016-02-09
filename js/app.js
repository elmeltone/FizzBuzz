$(document).ready(function() {

/* --ORIGINAL FIZZBUZZ APP--

var fbNumbers = [];


for(var i=1; i !=101; i++) {
  fbNumbers.push(i);
};

for(var i=0; i !=101; i++) {

  if (fbNumbers[i]%3 == 0 && fbNumbers[i]%5 == 0)
    document.write("FizzBuzz");
  else if (fbNumbers[i]%3 == 0 && fbNumbers[i]%5 != 0)
    document.write("Fizz");
  else if (fbNumbers[i]%3 != 0 && fbNumbers[i]%5 == 0)
    document.write("Buzz");
  else if (fbNumbers[i] != undefined)
    document.write(fbNumbers[i]);
  document.write("<br>");
  };

*/

/* --Refactor Challenge-- */

var newValue = parseInt(prompt("Please supply a whole number from 1 - 100."));

if (newValue%1 != 0)
  alert("Please refresh and try again!");
else if (newValue != NaN) {
  if (newValue%3 == 0 && newValue%5 == 0)
    document.write("FizzBuzz");
  else if (newValue%3 == 0 && newValue%5 != 0)
    document.write("Fizz");
  else if (newValue%3 != 0 && newValue%5 == 0)
    document.write("Buzz");
  else if (newValue != undefined)
    document.write(newValue);
  };




});
