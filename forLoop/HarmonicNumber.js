//Calculating harmonic number
const prompt = require("prompt-sync")();
let num = prompt("Enter the number:");
let sum=0;

for(var i=1;i<=num;i++)
{
    sum+=(1/i);
}
console.log("The harmonic value is: "+sum);