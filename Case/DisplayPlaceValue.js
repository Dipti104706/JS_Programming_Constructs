//Read the number and display corresponding place value as unit,te in words
//const prompt = require("prompt-sync")();
//const number = prompt("Enter a number to display its place value(between 1-100000): ");
let number=15550;
let digit=0;

while(number>10)
{
    number=number/10;
    digit =digit+1;
}

switch(digit)
{
    case 0:
    {
        console.log("Place value of the number is: Unit");
        break;
    }
    case 1:
    {
        console.log("Place value of the number is: Ten");
        break;
    }
    case 2:
    {
        console.log("Place value of the number is: Hundred");
        break;
    }
    case 3:
    {
        console.log("Place value of the number is: Thousand");
        break;
    }
    case 4:
    {
        console.log("Place value of the number is:Ten Thousand");
        break;
    }
    default:
    {
        console.log("Please enter number between the range");
        break;
    }
}