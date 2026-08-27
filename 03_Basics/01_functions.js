// console.log("S");
// console.log("A");
// console.log("H");
// console.log("I");
// console.log("L");
// console.log("G");

function sayMyName(){
console.log("S");
console.log("A");
console.log("H");
console.log("I");
console.log("L");
console.log("G");
}
// sayMyName();
// S
// A
// H
// I
// L
// G

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

/*
addTwoNumbers(); //NaN
addTwoNumbers(3,4); //7
addTwoNumbers(3,"4"); //34
addTwoNumbers("3",4); //34
addTwoNumbers("3","4"); //34
addTwoNumbers(3,null); //3

const result=addTwoNumbers(3,5); // 8
console.log("Result:",result); // undefined


*/

function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;
}

const result=addTwoNumbers(3,5);
console.log("Result:",result); // Result: 8

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }

    // OR

    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} just logged in`
}
const message=loginUserMessage("Sahil");
console.log(message);
console.log(loginUserMessage()); //undefined just logged in
 
// ++++++++++++++++++++++shoping cards+++++++++++++++++++

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(2)); //[ 2 ]
//...(rest operator)
console.log(calculateCartPrice(200,400,500));
// [ 200, 400, 500 ]

console.log(calculateCartPrice(100,205,200,300,400,500));
// [ 100, 205, 200, 300, 400, 500 ]

function calculateCartPrice1(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice1(100,200,300,400,500,600));
// [ 300, 400, 500, 600 ]

const user={
    username:"sahil",
    price:999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
// Username is sahil and price is 999


function handleObject1(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject1(user);
// Username is sahil and price is undefined


handleObject({
    username:"sam",
    price:399
})
// Username is sam and price is 399

const myNewArray=[200,400,100,500]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); //400
