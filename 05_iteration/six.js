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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 const userBooks=books.filter((bk)=>bk.genre==='History')
 const userBooks1=books.filter((bk)=>bk.edition===2010)
console.log(userBooks);
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

console.log(userBooks1);
// [
//   {
//     title: 'Book Four',
//     genre: 'Non-Fiction',
//     publish: 1989,
//     edition: 2010
//   },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
// ]

