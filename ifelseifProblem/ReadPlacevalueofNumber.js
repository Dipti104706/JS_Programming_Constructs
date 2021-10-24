//Reads a number and display its place value as unit,ten,........
const prompt = require("prompt-sync")();
const number = prompt("Enter a number to display its place value(between 1-100000): ");
if(number>=1 && number<10)
{
    console.log("Place value of the number is: Unit");
}
else if(number>=10 && number<100)
{
    console.log("Place value of the number is: Ten");
}
else if(number>=100 && number<1000)
{
    console.log("Place value of the number is: Hundred");
}
else if(number>=1000 && number<10000)
{
    console.log("Place value of the number is:Thousand");
}
else if(number>=10000 && number<100000)
{
    console.log("Place value of the number is:Ten Thousand");
}
else
{
    console.log("Please enter number in the range");
}