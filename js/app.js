$(document).ready(function() {

var fbNumbers = [];
var fizz = i%3;
var buzz = i%5;

for(var i=1; i !=101; ++i) fbNumbers.push(i);

if (fizz=0) fbNumbers.replace("Fizz");
if (buzz=0) fbNumbers.replace("Buzz");
if (fizz=0 && buzz=0) fbNumbers.replace("FizzBuzz");



//for (i%3==0) return "buzz";

document.write(fbNumbers);







});
