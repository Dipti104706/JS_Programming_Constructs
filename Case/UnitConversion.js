const prompt = require("prompt-sync")();
let operation=prompt("Enter the operation you want to perform:\n 1.Feet to inch conversion \n 2.Inch to Feet Conversion \n 3.Feet to Meter Conversion \n 4.Meter to Feet Conversion\n");

switch(operation)
{
    case "1": 
    {
        let feet=prompt("Enter the feet value ");
        let inch=feetToInch*12;
        console.log("Feet to inch " +inch);
        break;
    }
    case "2":
    {
        let inch1=prompt("Enter the inch value ");
        let feet1=inchToFeet*0.0833333;
        console.log("Inch to feet " +feet1);
        break;
    }
     case "3":
    {
        let feet2=prompt("Enter the feet value ");
        let meter=feet2*0.3048;
        console.log("Feet to meters " +meter);
        break;
    }
    case "4":
    {
        let meter2=prompt("Enter the meter value ");
        let feet3=meterToFeet*3.28084;
        console.log("meters to feet  " +feet3);
        break;
    }
    default:
    {
        console.log("Invalid Input!");
        break;
    }
}