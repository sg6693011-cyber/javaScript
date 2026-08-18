const score=400
console.log(score); //400
const balance=new Number(100) //[Number: 100]
console.log(balance);
console.log(balance.toString()); //100(string)
console.log(balance.toExponential()); //1e+2
console.log(balance.toFixed(1));

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)) //23.9
// but when otherNumber=123.8966 then o/p=124
// for 1123.8966 => 1.12e+3

const hundreds=1000000
console.log(hundreds.toLocaleString()); //1,000,000
// for indian value
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// ********************MATH*********************

console.log(Math); //object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.3)); //4
console.log(Math.max(4,3,18,45)); //45
console.log(Math.min(1 ,2,6, 4, 3)); //1
console.log(Math.random()); // different value btw 0 and 1
console.log(Math.random()*10  +1); // different value btw 1 and 9

console.log(Math.floor(Math.random()*10 + 1)); //an integer value

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);