// Dates
let myDate=new Date();
console.log(myDate); //2026-08-18T11:36:10.354Z
console.log(myDate.toString()); //Tue Aug 18 2026 11:38:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Tue Aug 18 2026
console.log(myDate.toISOString()); //2026-08-18T11:42:13.056Z
console.log(myDate.toLocaleString()); //8/18/2026, 11:42:48 AM

//important
console.log(typeof myDate); //object

let myCreateddate=new Date(2023,0,23); //month start from 0.
console.log(myCreateddate.toDateString()); //Mon Jan 23 2023

let mynewCreateddate=new Date(2023,0,23,5,3); 
console.log(mynewCreateddate.toLocaleString()) //  1/23/2023, 5:03:00 AM
 
let newdate=new Date("01-14-2023");
console.log(newdate.toLocaleDateString()); //1/14/2023

let myTimeStamp=Date.now();
console.log(myTimeStamp); //1787058782864 //(time in mili second)
console.log(mynewCreateddate.getTime()); //1674450180000//(time in mili second)

// for change time in second
console.log(Math.floor(Date.now()/1000)); // 1787059146 //(total time from 1970 to today in second)

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); //8 (month) //(yaha month 0 to 11 hota h)
console.log(newDate.getDate()); //18 (Tarikh)


newDate.toLocaleDateString('default',{
    weekday:"long",
    timeZone:"Asia/Kolkata",
})
console.log(newDate);
