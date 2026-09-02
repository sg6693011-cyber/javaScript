const userEmail="sahil@microsoft.ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// => 0,-0,BigInt 0n,"",null,undefined,NaN

// truthy
// => "0",'false'," ",[],{},function(){}

if (userEmail.length===0) {
    console.log("string is  Empty");
}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }


// Nullish Coalescing Operator (??):null undefined

// Nullish Coalescing Operator (??)
//  JavaScript ka operator hai jo tab 
// default value deta hai jab left 
// side ki value null ya undefined ho.


let val1;
// val1=5 ?? 10 // 5
// val1=null ?? 10 // 10
// val1=undefined ?? 15 // 15
val1=undefined ?? 10 ?? 20 // 10 (first defined value)
console.log(val1);


// Terniary operator

// condition ? true :false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80"); 
// more than 80

