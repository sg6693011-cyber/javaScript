const coding=["js","rubby","java","python","cpp"]
// coding.

// coding.forEach( function (item) {
//     console.log(item);
// } )

// or

// coding.forEach((item)=>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);
// js
// rubby
// java
// python
// cpp

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// js 0 [ 'js', 'rubby', 'java', 'python', 'cpp' ]
// rubby 1 [ 'js', 'rubby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'rubby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'rubby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'rubby', 'java', 'python', 'cpp' ]

const myCoding=[
    {
        langaugeName:"javaScript",
        langaugeFileName:"js"
    },
    {
        langaugeName:"java",
        langaugeFileName:"java"
    },
    {
        langaugeName:"python",
        langaugeFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.langaugeName);
})

// javaScript
// java
// python
