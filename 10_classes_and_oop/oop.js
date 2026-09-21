const user={
    username:"hitesh",
    logicCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user Details from user")
        // console.log(`Username:${this.username}`);
        console.log(this); //current context
    }
}


// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this); // {}



function User(username,logicCount,isLoggedIn){
    this.username=username;
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne=new User("hitesh",12,true);
const userTwo=new User("sahil",11,false);
console.log(userOne);
console.log(userTwo);
// console.log(userOne.constructor);

// steps

// 1st when we use "new" key word ,to ek empty object create
// hota h jisko instance bola jata h
// 2nd ek constructor function call hota h "new" key word ke karan
// 3rd jo this word create hua h wo usme add ho jayega
