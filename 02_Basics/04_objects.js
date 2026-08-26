// const tinderUser=new Object() //singleton object
const tinderUser={} //nonSingleton object
console.log(tinderUser);
//{}

tinderUser.id="123abc"
tinderUser.name="sahil"
tinderUser.isLogged=false
console.log(tinderUser);
// { id: '123abc', name: 'sahil', isLogged: false }

const regularUser={
    email:"sahil@microsoft.com",
    fullname:{
        userfullname:{
            firstname:"sahil",
            lastname:"Giri",
        }
    }
}

console.log(regularUser.fullname);
// { userfullname: { firstname: 'sahil', lastname: 'Giri' } }
console.log(regularUser.fullname.userfullname.firstname);
// sahil

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2};
console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4=Object.assign(obj1,obj2)
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5={...obj1,...obj2};
console.log(obj5);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users=[
    {
        id:1,
        email:"sahil@microsoft.gmail.com"
    },
    {
        id:1,
        email:"sahil@microsoft.gmail.com"
    },
    {
        id:1,
        email:"sahil@microsoft.gmail.com"
    },
    {
        id:1,
        email:"sahil@microsoft.gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLogged' ]
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// [ '123abc', 'sahil', false ]
// [ [ 'id', '123abc' ], [ 'name', 'sahil' ], [ 'isLogged', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged'));
// true

