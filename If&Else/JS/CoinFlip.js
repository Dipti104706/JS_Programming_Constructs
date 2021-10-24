//4-Flip coin simulation and print head or tail

var flip=Math.floor(Math.random()* 10)%2;
console.log(flip);
if(flip==1)
{
    console.log("Head")
}
else{
    console.log("Tail")
}