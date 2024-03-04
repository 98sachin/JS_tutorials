let a =10
let b =20
let c =30

// console.log(a,b,c)
// console.log(a)
// console.log(b)
// console.log(c)

// watch the video

// =======================================================================================================

// nested scope

// function one(){
//     const username = "sachin"
    
//     function two(){
//         const website = "youtube.com"
//         console.log(username)
//     }
//     // console.log(website) // this gives an error because it is out of scope
//     // two()
// }
// one()

// the above example also explains about closure i.e., the inner function can access the outer function.

// understanding the scope concept in if/else statement
// if(true){
//     const username = "sachin"
//     if(username === "sachin"){
//         const website = " wikipedia.com"
//         console.log(username+website);
    // }
    // console.log(website) // gives an error
// }
// console.log(username) // gives an error

// ================================================================
// console.log(addOne(5))
function addOne(num){
    return num + 1
}
// console.log(addOne(5))


console.log(addtwo)
const addtwo = function(num2){
    return num2+1
}
console.log(addtwo)