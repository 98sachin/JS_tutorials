// DESTRUCTURING of an object in JS

const course = {
    courseName: "javascript",
    instructor:"hitesh",
    price: "999",
};
// different ways to print
// console.log(course.instructor); console.log(course.price);

// the correct way or the most used way
const {courseName} = course;
// console.log(courseName);

const {instructor} = course;
// console.log(instructor);

// we can also change the name of a key and print it
const {price:coursePrice} = course
// console.log(coursePrice)

// ====================================================================================================

// concept of API (to let others do our work)

// API is the values form backend and how we write it. these days the values arein json format or array format which has objects in it.

// JSON: where both the keys and values are in string format
{
    "name":"sachin",
    "age":26,
    "working":true,
}

// when data is in array format
[
    {},
    {},
    {},
    {},
]
