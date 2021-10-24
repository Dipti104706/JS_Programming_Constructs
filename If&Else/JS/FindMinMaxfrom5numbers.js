//Read the 5 random integers and prnt minimum and maximum value

let minNum=randomVal=Math.floor(Math.random()*1000);
console.log("random value 1-" +minNum);
let maxNum=minNum;
for(var i=2;i<=5;i++)
{
    var randomVal=Math.floor(Math.random()*1000);
    console.log("random value " +i+ "-" +randomVal);
    if(randomVal>maxNum)
    {
        maxNum=randomVal;
    }
    else
    {
        maxNum=maxNum;
    }
    if(randomVal<minNum)
    {
        minNum=randomVal;
    }
    else
    {
        minNum=minNum;
    }
}
console.log("Minimum value is:" +minNum);
console.log("Maximum value is:" +maxNum);