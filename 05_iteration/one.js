//  for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 is present");
    }
    console.log(element);
}

for (let j = 0; j < 10; j++) {
    console.log(`Outer loop value : ${j}`);
    for (let i = 0; i < 10; i++) {
        console.log(`Inner loop value ${i} and outer loop value ${j}`)
    }
}

let myArr=["flash","batman","padman"];
// console.log(myArr.lenght);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}

// break and continue
for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`value of i is ${i}`);
}


for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`value of i is ${i}`);
}

