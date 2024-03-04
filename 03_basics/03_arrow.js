// before learning about arrow function we need to learn about "this" keyword. this refers to current context

// const user = {
//     username: "sachin",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to our website.`)
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// ====================================================================================
// Arrow function

// function chai(){
//     let name = "sachin"
//     console.log(this.name) // this keyword doesn't in function , it works in object
// }
// chai()


// function chai1(){
//     console.log(this)
// }
// chai1()


// const abc = function(){
//     let username = "sachin"
//     console.log(this.username)
// }
// abc()

// const abcd = function(){
//     let username = "sachin"
//     console.log(this)
// }
// abcd()

// const abcd = () => {
//     let username = "sachin"
//     console.log(this)
// }
// abcd()

// const abcd = () => {
//     let username = "sachin"
//     console.log(this.username)
// }
// abcd()


// const addnums = (num1,num2) => {
//     return num1 + num2
// }

// for single line statement, we can remove "return" keyword and the {} , when we use the {} then we will have to write the return keyword
// const addnums = (num1,num2)=> num1+num2
// const addnums = (num1,num2)=> (num1+num2)
// console.log(addnums(5,6))

// to return an object in the single line arrow function
const addnums = (num1,num2) => ({username:"sachin"})
console.log(addnums(3,4))