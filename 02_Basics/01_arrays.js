//array
// JavaScript arrays are resizable and can contain a mix of different data types.
// const myArr=[0,1,2,3,4,5,true,"hitesh"]

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","ironman","thor"];
console.log(myArr[4]); //4
console.log(myArr[1]); //1

// Array methods
myArr.push(6);
myArr.push(7); // insert element in last of the array
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6, 7
// ]

myArr.pop(); // remove last element
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6,
// ]


// for insert element in start of the array
myArr.unshift(9);
console.log(myArr);
// [
//   9, 0, 1, 2,
//   3, 4, 5, 6
// ]

// remove element from start
myArr.shift();
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

console.log(myArr.includes(9)); // flase // (9 is not present.)
console.log(myArr.indexOf(9)); // -1

const newArr=myArr.join(); // conver array in to string

console.log(myArr); // (previous array)
console.log(newArr); // 0,1,2,3,4,5,6

console.log(typeof myArr); //object
console.log(typeof newArr); //string

// slice,splice
console.log("A ",myArr);
// A  [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
const myn1=myArr.slice(1,3);
console.log(myn1); // [ 1, 2 ]

console.log("B ",myArr);
// B  [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

const myn2=myArr.splice(1,3);
console.log("C ",myArr);
// C  [ 0, 4, 5, 6 ]
console.log(myn2);
// [ 1, 2, 3 ]

// +++++++++++++++++++part-02+++++++++++++++

