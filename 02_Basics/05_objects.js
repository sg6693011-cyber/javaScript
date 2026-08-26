const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
console.log(course.courseInstructor);
// hitesh

const{courseInstructor}=course
console.log(courseInstructor);
// hitesh

const{courseInstructor:instructor}=course
console.log(instructor);
// hitesh


//JSON
// {
//     "name":"sahil",
//     "coursename": "js in hindi",
//     "price":"free"
// }

// https://api.github.com/users/hiteshchoudhary
// randomuser.me
// json formatter