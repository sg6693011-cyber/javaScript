//singleton  (jab literals se obj bante h to singleton nahi banta h)

// object literals

const mySym=Symbol("key1")

const JsUser={
    name:"sahil",
    "full name":"sahil giri",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age:18,
    location:"varanasi",
    email:"sg6693011@gmail.com",
    isLoggedIn:false,
    lastLoggedDays:["sunday","monday"],
}
console.log(JsUser.email);
console.log(JsUser["email"]);
//sg6693011@gmail.com
// sg6693011@gmail.com
console.log(JsUser["full name"]) //we can't access it withought [" "] 
// sahil giri

/*Important
console.log(JsUser.mySym); // here it's use as string
//mykey1
console.log(typeof JsUser.mySym);
//string

*/

// right approach
console.log(JsUser[mySym]); //mykey1
console.log(typeof JsUser[mySym]); //string

JsUser.email="sahil.20253236@gmail.com"
// Object.freeze(JsUser)
JsUser.email="sahil@microsofrt.com"
console.log(JsUser);

// {
//   name: 'sahil',
//   'full name': 'sahil giri',
//   age: 18,
//   location: 'varanasi',
//   email: 'sahil.20253236@gmail.com',
//   isLoggedIn: false,
//   lastLoggedDays: [ 'sunday', 'monday' ],
//   Symbol(key1): 'mykey1'
// }

JsUser.greeting=function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting);
// undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//Hello Js User,sahil
