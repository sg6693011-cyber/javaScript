// let ,var and const

 //{}=>scope

 var c=300
let a=100

 if(true){
 let a=10
 const b=20
 var c=30
 console.log("Inner 'a':",a);
 }
//  console.log(a); //a is not defined
//  console.log(b); //b is not defined
console.log(c);//30 // yaha var like global work karta h.
console.log(a); //100

// let and const work as scope variable inside of {}

function one(){
    const username="sahil"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); // error
    two();
}
 
// one() //sahil

if(true){
    const username="sahil"
    if(username=="sahil"){
        const website="youtube"
        console.log(username + website);
    }
    // console.log(website);//error
}
// console.log(username); //error




// ++++++++++++++++++Interesting++++++++++++++++

console.log(addone(9)); // 10
function addone(value){
    return value+1;
}
console.log(addone(5)); // 6

// some time it is called expressions. 

addTwo(1); // Cannot access 'addTwo' before initialization.
const addTwo=function(num){
    return num+2;
}
addTwo(5)



