const myObject={
    cpp:"c++",
    rb:"rubby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// cpp shortcut is for c++
// rb shortcut is for rubby
// swift shortcut is for swift by apple

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
      console.log(key);
      console.log(programming[key]);
}