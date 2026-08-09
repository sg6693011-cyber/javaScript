// # primitive

//  7 types : string,Number,Boolean,null,undefined,Symbol,BigInt

// (JavaScript is a Dynamic typed langauge h => matlab esme variable ko define
//  karte time pr var ka type nahi batana padta)

const score=100
const iscoreValue=100.0
const isLoggedIn=false
const outsideTemp=null
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id==anotherId) //false


const bigNumber=1234567898765432123456789n
console.log(bigNumber)
//  yaha n ka matlab dataType bigInt h



// Reference (Non primitive)
//  Array,Objects,Functions

const heros=["ironman","spiderman","hulk"];
let myObj={
    name:"sahil",
    age:18,
}
const myFunction=function(){
    console.log("hello world");
}
console.log(heros);
console.log(myObj);
console.log(myFunction);
console.log(typeof myFunction); //function
console.log(typeof heros); //object
console.log(typeof bigNumber); //bigint