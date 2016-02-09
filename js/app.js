$(document).ready(function() {

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

prompt("Please supply a whole number from 1 - 100.");

});
