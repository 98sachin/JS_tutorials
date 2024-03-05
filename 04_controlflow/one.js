// Different type of control flow

// 1. if

// <,>,<=,>=
// = is an assignment operator
// == is equality operator
// === srtictly equal, this check the value as well as the datatypes
// != not equal

// const userLoggedIn = true;
// if(userLoggedIn == true){
//     console.log('executed')
// }else{
//     console.log('not executed')
// }

// const score = 200;
// if(score>100){
//     const power = "fly";
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`) // this is out of scope of the if statement, power is not defined in the global scope.
// ==============================================================
// const score = 200;  
// if(score>100){ // this code is not safe as the var is of global scope. always use "let" and "const"
    // var power = "fly";
    // console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`) //this will get executed as the var keyword used inside the if scope, the scope of var is completely global


// short-hand notation
const balance = 1000;
// if (balance<1200) console.log("insufficient balance")  // no {} = implicit scope. only executed for one line.


// checking multiple conditions(i,e., nested conditions)
// if-else if-else statement

// using &&(and), ||(or), !(not) to check miltiple conditions

