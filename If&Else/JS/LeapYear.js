//3- Find a year is a leap or not

var prompt = require("prompt-sync")();
let year = prompt("Enter the year to check?");

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
{
    console.log(year + " is a leap year");
}
else 
{
    console.log(year + " not a leap year");
}

