//  stack (Primitive), Heap (Non-Primitive)
let myName="sahil"
let anotherName=myName
anotherName="shivam"
console.log(myName);
console.log(anotherName);

let userOne={
    email:"userone@gmail.com",
    upi:"uer1",
}
let userTwo=userOne;
userTwo.email="sahil@2006"
console.log(userOne.email);
console.log(userTwo.email);