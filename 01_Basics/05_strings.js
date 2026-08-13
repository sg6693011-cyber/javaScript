const name="sahil"
const repoCount=3

// console.log(name + repoCount + " Giri");

// use "backticks (``)" (~)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('sahilGiri');
console.log(gameName[0]); //s
console.log(gameName.__proto__); //{}


console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //SAHILGIRI
console.log(gameName.charAt(5)); // G 
console.log(gameName.indexOf('g')); // -1
console.log(gameName.indexOf('G')); // 5

const newString=gameName.substring(0,4); //sahi
console.log(newString);
const anotherString=gameName.slice(-9,5); //sahil(-ve for back side)
console.log(anotherString);

const  newStringone= "   sahil   ";
console.log(newStringone);
console.log(newString.trim());

const url="https://sahil.com/sahil%20giri"
console.log(url.replace('%20','-')); //https://sahil.com/sahil-giri

console.log(url.includes('sahil')); //true

const Name=new String('sahil-giri-20253236');
console.log(Name.split('-')); //[ 'sahil', 'giri', '20253236' ]