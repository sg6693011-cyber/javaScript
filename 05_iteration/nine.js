const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
   return acc + currval; 
},0)
console.log(myTotal); // 6

const myTotal1=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal1); // 6

const shoppingCart=[{
    itemName:"py-course",
    price:3999
},
{
    itemName:"py-course",
    price:3999
},
{
    itemName:"java-course",
    price:2999
},
{
    itemName:"cpp-course",
    price:4999
},
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay); // 15996
