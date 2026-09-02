// if

// <,>,<=,>=,!=,==,===
if(2=="2"){
 console.log("executed");
}

const isUsserloggedIn=true
const temperature=41
if(temperature<50){
    console.log("less than 50");
}
else {
    console.log("temperature is greater than 50");
}



// related to scope

const score=200
if(score>100){
    const power="fly"
    console.log(`user power : ${power}`);
}
// user power : fly

// console.log(`user power : ${power}`); // power is not defined

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
   console.log("Allow to buy course."); 
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("userlogged in");
}




