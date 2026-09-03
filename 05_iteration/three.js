// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element);
}

const greeting = "HelloWorld"
for (const element of greeting) {
    console.log(`each char is ${element}`);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

// console.log(map);

// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United State of America',
//   'Fr' => 'France'
// }

for (const key of map) {
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

for (const key in map) {
    console.log(key);
}

// it does not print anything here because of here map is not iterable


for (const [key,value] of map) {
    console.log(key ,':-',value);
}

// IN :- India
// USA :- United State of America
// Fr :- France


const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }

// it's give us error => myObject is not iterable
// because object forof me iterable nahi hota h

for (const key in myObject) {
    console.log(key);
}
// game1
// game2