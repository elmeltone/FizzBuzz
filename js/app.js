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
  else document.write
    (fbNumbers[i]) return "";

  document.write("<br>");
  };


//document.write(fbNumbers);







});
