// different ways of declaring arrays
// let arr = [1,2,3,4,5,6]
// console.log(arr[1])

// let arr1 = new Array(2,4,"sachin");
// ============================================================

// array methods

// arr.push(7)  // adds the element to the last position
// console.log(arr)

// arr.pop() // no arguments needs to be add.removes the position from the last element
// console.log(arr)

// arr.unshift(0) // adds an element at the start, this is not the most used method
// console.log(arr)

// arr.shift() // no arguments needs to be added. removes the 1st element
// console.log(arr)

// console.log(arr.includes(9)) // returns true or false

// const newArr = arr.join()
// console.log(newArr)
// console.log(typeof newArr)

// =====================================================================
// slice and splice

// const abc = [23,45, 67,89,98,87,65]
// console.log("A ", abc)
// const myArr1 = console.log(abc.slice(1,4)) // prints the value in between 1 and 4 excluding 4's and 1's element

// console.log("B ", abc)
// const myArr2 = console.log(abc.splice(1,4))

// ======================================================================

const marvel_heroes = ["iron man", "thor", "spider man"]
const dc_heroes = ["superman", "batman", "flash"]

// using push() method
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // this pushes the dc_heroes array as an array in the marvel_heroes array.

// using concat() method
// console.log(marvel_heroes.concat(dc_heroes))

// using spread() operator, preferred more than concat() operator
// const all_heroes = [...marvel_heroes, ...dc_heroes  ]
// console.log(all_heroes)

// using flat() operator, parameter= a number which specifies the depth . gives a single array
// const aa = [1,2,3,[4,5],6,7,[8,9,[10,11]]]
// // const ab = aa.flat(3)
// const ab = aa.flat(Infinity)
// console.log(ab)

// when you get data which is a string/nodelist/etc but we need an array. we can convert it as shown below
// console.log(Array.isArray("sachin")) // to check if the data is an array
// console.log(Array.from("sachin")) // to convert other datatypes into an array
// console.log(Array.from(1864)) // to convert other datatypes into an array
// console.log(Array.from({name:"sachin"})) // interesting

// converting multiple variables inot an array
let a1 = 123
let a2 = 1234
let a3 = 12345
console.log(Array.of(a1,a2,a3))
