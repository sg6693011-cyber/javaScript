const coding=["js","ruby","java","python","cpp"];

const values=coding.forEach((item)=>{
    // console.log(item);
    return item;
})
console.log(values); // undefined

// matlab forEach kuchh bhi return nahi karta h.

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4)
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums1=myNums.filter((num)=> {
    num>4
})
console.log(newNums1); // [] // kyoki yaha scope k to value return karna hoga return karta h

const newNums2=myNums.filter((num)=> {
    return num>4
})
console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]

