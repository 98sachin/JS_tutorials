//****************** For-of loops ********************

// syntax :
// for (const iterator of object) {

// }

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello World!"
for (const ltr of greeting) {
    // console.log(ltr)
}

// ==============================================

// Maps
// this method is known for unique values and remembering the order of elements

const cap = new Map()
// to set the values
cap.set("ind", "India")
cap.set("usa", "United States of America")
cap.set("uae", "United Arab Emirates")
// console.log(cap)
// console.log(cap.keys)

// const cap1 = new Map()
// cap1.set("ind", "India")
// cap1.set("usa", "United States of America")
// cap1.set("uae", "United Arab Emirates")
// cap1.set("ind", "India")  // map method does not duplicates the entries.
// console.log(cap1)

// if we apply for of loop on map()
// for (const caps of cap1) {
//     // console.log(caps)
// }

// for (const [caps,casp] of cap1) {
//     // console.log(caps," : ",casp)
// }
// =================================

// let check applying forof loop on an object
const myObj = {
    game1: "nfs",
    game2: "gta",
    game3: "sudoku",
    game4: "subway surfers",
}
// for(const myResult of myObj){
// console.log(myResult)
// }
// the above forof loop doesn't work because here the object is not iterable. There is a different way to iterate an object.

// =======================================================================================================================

// ****************** FOR IN LOOP *******************

// learning more about object
// since forof loop was not working for objects we will check "forin" loop

const myObject = {
    JS: 'javascript',
    cpp: "c++",
    py: "python",
    rb: "ruby",
}

for (const a in myObject) {
    // console.log(a)  // this will print only the keys
}
for (const a in myObject) {
    // console.log(myObject[a])  // this will print only the values
}
for (const a in myObject) {
    // console.log(`${a} is the key and ${myObject[a]} is the value.`)
}

// ================================================

// now lets check if this forin loop will work in arrays
const programming = ["js", "python", "java", "c", "c++"];
for (const b in programming) {
    // console.log(b) // this will print the index numbers also called keys.
}

for (const c in programming) {
    // console.log(programming[c]) // this will print values
}

// ===================================================

// lets check if the "forin" loop works in map() method

const cap1 = new Map()
cap1.set("ind", "India")
cap1.set("usa", "United States of America")
cap1.set("uae", "United Arab Emirates")
cap1.set("ind", "India")
// console.log(cap1)

for (const d in cap1) {
    console.log(d)
}
// again, since map() is not iterable so we can't write it in a loop. but there are ways to iterate map().

// ============================================================================================================

// ************ FOR EACH LOOP *********************
// most used loop
// syntax: 
// array.forEach(element => {

// });


const coding = ["js", "python", "java", "c", "c++", "rust"];

// the basic way
// coding.forEach(function(item){ // the item here is a callback function
//     console.log(item)
// });

// the above code can also be written as, the more correct way

// coding.forEach(item => { // the item here is a callback function
//     console.log(item)
// });

// one more way :- ======================

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// =================
// the information/value coming from database are in array format, all the information/value are objects. so we will learn the iteration 

const myCoding = [
    {
        name: "sachin",
        age: 26,
        gender: "male,"
    },
    {
        lang: "js",
        project: "e-commerce",
        school: 'devtown'
    },
    {
        interest: 'java and python',
        hobby: 'sleeping',
    },
]

myCoding.forEach((items)=>{
    console.log(items.interest)
})