let score="33abc"

console.log(typeof score); //string
console.log(typeof (score)); //string

let valueInNumber = Number(score); 
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //(NaN) => not a nuber

// "33" => 33
// "33abc" =>NaN
//  true =>1
// false =>0

let isloggedIn=1234
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn); //true

// 1=>true; 0=>false
// "" =>false
//  "hitesh" =>true

let someNumber = 33;
let stringNumber=String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string

// note=>JavaScript is case Sensative Langauge;


// ******************** operations ******************

let value=3;
// ++++++++++++++++++++ general Oeations ++++++++++++++++++++++++++++

// let negValue=-value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// +++++++++++++++++++++++****+++++++++++++++++++

let str1="sahil"
let str2=" Shivam"
let str3=str1+str2;
console.log(str3);

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122 
console.log(1+2+"2"); //32 (because 1+2=3 => "3"+"2"="32")
console.log(3+4*5%2);

// +++++++++ some other conversion (don't use them onlyn for information)+++++++
console.log(+true);
console.log(+""); 

let num1,num2,num3
num1=num2=num3=2+2;

let gameCounter=100;
++gameCounter;
console.log(gameCounter);