const prompt = require("prompt-sync")();
const num1 =prompt("Enter first number:");
const num2 = prompt("Enter second number:");
const num3 = prompt("Enter third number:");

//Arithmatic operations
let res1 = (num1+num2)*num3;
let res2 = (num1%num2)+num3;
let res3 = (num3+num1)/num2;
let res4 = (num1*num2)+num3;
console.log("Result of Expression 1: "+res1+"\nResult of Expression 2: "+res2+"\nResult  of Expression 3: "+res3+"\nResult  of Expression 4:"+res4);
let max=0;
let min=0;

//Checking for minimum value
if(res1<res2 && res1<res3 && res1<res4)
{
    min=res1;
}
else if(res2<res1 && res2<res3 && res2<res4)
{
    min=res2;
}
else if(res3<res1 && res3<res2 && res3<res4)
{
    min=res3;
}
else
{
    min=res4;
}

//Checking for maximum value
if(res1>res2 && res1>res3 && res1>res4)
{
    max=res1;
}
else if(res2>res3 && res2>res4 && res2>res1)
{
    max=res2;
}
else if(res3>res1 && res3>res2 && res3>res4)
{
    max=res3;
}
else
{
    max=res4;
}

console.log("\nMaximum value is: "+max+"\nSmallest value is: "+min);