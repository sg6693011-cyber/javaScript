const user={
    username:"sahil",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this); // it prints whole object
        // this => talk about curent object
    }
}
// user.welcomeMessage // gives no output
user.welcomeMessage() //sahil,welcome to website
user.username="shivam"
user.welcomeMessage() // shivam,welcome to website

console.log(this); // {}
// yaha this environment ke bahar h esliye , yaha this current object yani empty ko represent karta h

function chai(){
    console.log(this);
}
chai()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
  */


function chai1(){
    let username="sahil"
    console.log(this.username);
}
chai1() // undefined

// +++++++ Arrow function ++++++

const chai2 = () => {
    let username="sahil"
    console.log(this.username);
    console.log(this); // {}
}
chai2() // undefined

/*
Feature	  Normal Function	 Arrow Function
Syntax	      function() {}	        () => {}
Own this	      ✅ Yes	       ❌ No
this kaise milta hai   "Call karne wale context se"	 "Outer scope se"
Own arguments	    ✅ Yes	   ❌ No
new ke saath use	✅ Yes      ❌ No
*/


// Explicit Arrow function=> when you use return

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,4)); // 7


// Implicit Arrow function=>when you not use return

const addTwo1=(num1,num2)=> num1+num2;

console.log(addTwo1(5,4)); //9

// OR

const addTwo2=(num1,num2)=>(num1+num2);
console.log(addTwo2(10,8)); // 18

// here remenber one thing always if you use {} then you should
// write "return" word otherwise when you use () then
// don't use "return" word.

const addTwo3=(num1,num2)=>{username:"sahil"}
console.log(addTwo3(3,4)); // undefined

