// JS automatically converts/identifies a number
// let a = 200
// console.log(a)
// console.log(typeof a)

// we can Explicitly define a number in JS
// const b = new Number(400)
// console.log(b)
// console.log(typeof b)
// console.log(b.toFixed(2))

// let c =console.log(b.toString())
// console.log(typeof c)

// const asd = 123.344
// let nn = console.log(asd.toPrecision(5)) 

// const hundreds = 100000000
// console.log(hundreds.toLocaleString()) //US standard
// console.log(hundreds.toLocaleString('en-IN')) //IND standard


// ++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-34)); // this changes the negative value to positive.
// console.log(Math.round(23.89))
// console.log(Math.ceil(5.1)); // this is cealing(i.e top) i.e it will choose the top/incremented value even if the value is slightly high.
// console.log(Math.floor(5.9))
// console.log(Math.sqrt(144))
// console.log(Math.pow(3,2)) // calculates power (base, exponent)
// console.log(Math.max(2,4,5,8))
// console.log(Math.min(2,4,5,8))
// console.log(Math.random()) // gives value between 0 and 1

// ------ small trick ------
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+10)