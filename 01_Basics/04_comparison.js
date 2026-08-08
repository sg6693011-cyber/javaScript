// console.log(1>2);
// console.log(1<=2);
// console.log(1==2);
// console.log(1!=2);
// console.log(1<2);


console.log("2">1); //true
console.log("02">1); //true

// +++++++++++++++++++++++ we should avoid this type of conversion +++++++++++++++++++++++++

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

// NOTE => The reason is that comparison(>,<,>=,<=)
//          convert null to a number and treating as
//          0 But equality(==) convert it as number 1
//          ,Therefore these answers come.

console.log(undefined == 0); //false
console.log(undefined>0); //false
console.log(undefined<=0); //false

// ++++++++++++++++++*****************++++++++++++++++

// === (it check's not only value but also DataTypes)
console.log("2"==="2"); //true
console.log("2"===2); //false

console.log("2"==2); //true (compare only value)