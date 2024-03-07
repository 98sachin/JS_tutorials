// const coding = ["js","java","python","c","c++","ruby"];
// // coding.forEach(callBackFinction)
// // const val = coding.forEach((item)=>{
// //     console.log(item)
// // })
// // console.log(val)
// // // console.log(val.item) // this will give an error

// const val1 = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(val1)

// const val2 = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(val2)

// from the above codes we conclude that the "forEach" loop does not return any value
// ==================================

// *************** FILTER Method ***********************
// return/check whether the condition is true or false

const nums = [1,2,3,4,5,6,7,8,9,10]

// array.filter(callBackFunction) // the filter function returns value

// const num1 = nums.filter((num)=> num>4);
// console.log(num1)

// const num1 = nums.filter((num)=> (num>4));
// console.log(num1)

// const num1 = nums.filter((num)=> {
//    return num>4   // since you have used {} you have to use "return" as you have started a scope.
// });
// console.log(num1)

// say you don't want to use ".filter" and want to use "forEach" for the same.
// const num2 = [1,2,3,4,5,6,7,8,9,10];
// const num3 = [];
// num2.forEach((nmbr)=>{
//    if(nmbr>4){
//       num3.push(nmbr)
//    }
// })
// console.log(num3);
// =======================================

// continuing with ".filter"

// const books = [
//    {title:"Book One", genre:"Fiction", publish:1981, edition:2004},
//    {title:"Book Two", genre:"Science", publish:1985, edition:2009},
//    {title:"Book Three", genre:"History", publish:1991, edition:2012},
//    {title:"Book Four", genre:"Technology", publish:1997, edition:2015},
//    {title:"Book Five", genre:"Future", publish:2000, edition:2022},
//    {title:"Book Six", genre:"Time", publish:2001, edition:20023},
// ];

// // const userBooks = books.filter((bk)=>bk.genre==="History") //fetch info of books of genre "history"
// let userBooks = books.filter((bk)=> bk.publish>=2000) //fitch info of books published in 2000 and above.
// userBooks = books.filter((bk)=>{
//    return bk.publish>=1997 && bk.genre==="Time"
// })
// console.log(userBooks)

// =====================================

// taking a step further

// ******************** MAP METHOD *********************
// array.map(callBackFunction)

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// add 10 to all the numbers
// const newNumber = myNumbers.map((nums)=> nums+10);
const newNumber = myNumbers.map((nums)=> {return nums+10});
// console.log(newNumber);

// if you dont wish to use map() and want to use forEach()

// const myNumbers2 = [1,2,3,4,5,6,7,8,9,10];
// const newNumber2 = [];
// myNumbers2.forEach((nums)=>{
//     const elem = (nums+10)
//     newNumber2.push(elem);
// })
// console.log(newNumber2)

// ======================================================
// ==== Chaining ==== using multiple method at the same time

// const numA = [1,2,3,4,5,6,7,8,9,10];
// const numB = numA.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=15)
// console.log(numB)

// ==============================================================

// **************** REDUCE METHOD *********************

// const numerical = [1,2,3,4]
// const initVal = 0;
// const newNumerical = numerical.reduce(function(accumulator, currentValue){
//     console.log(`accumulator=${accumulator} and currentValue=${currentValue}`)
//     return accumulator+currentValue;
// },initVal);

// console.log(newNumerical)

// performing the same above operation with arrow function ================
const numerical2 = [1,2,3,4];
const initValue = 0;
const newNumerical2= numerical2.reduce((accu, currVal)=> accu+currVal, initValue)
// console.log(newNumerical2)

const shoppingCart = [
    {pant: 'jeans', price:999, size:34},
    {shoes: 'nike', price:1999, size:9},
    {watch: 'casio', price:9999, size:"freesize"},
    {tshirt: 'nike', price:999, size:"L"},
]

const shopTotal = shoppingCart.reduce((accumulator,item)=>accumulator+item.price,0)
console.log(shopTotal)