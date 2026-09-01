//Immediately Invoked Function Expressions(IIFE)

// Normal fxn

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();

// OR

//IIFE fxn

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// IIFE=> jo fxn immediately execute ho jay
// global variable ke pollution ko hatane ke liye IIFE ka use kiya h

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})('Sahil')
// DB CONNECTED Sahil

