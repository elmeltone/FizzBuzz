$(document).ready(function() {

var fbNumbers = [];


for(var i=0; i !=101; i++) {
  fbNumbers.push(i);
};

for(var i=0; i !=101; i++) {
  if (fbNumbers[i]%3 == 0)
    document.write("Fizz");
  else if (fbNumbers[i]%5 == 0)
    document.write("Buzz");
  else if (fbNumbers[i]%3 == 0 && fbNumbers[i]%5 == 0)
    document.write("FizzBuzz");
  else document.write
    (fbNumbers[i]);

  document.write("<br>");
  };


//document.write(fbNumbers);







});
