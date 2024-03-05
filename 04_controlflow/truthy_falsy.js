const userEmail = "sachin@sharma.ai"
// if(userEmail){  // notice here we are just passing the variable , we are not checking whether the variable is true or false. so it assumes the condition to be true . so its a truthy value.
//     console.log('got the email')
// }else{
//     console.log('no email')
// }


const userEmail1 = "" // empty string
// if(userEmail1){  //here its assuming the value to be false without comparing. so its a falsy value.
//     console.log('got the email')
// }else{
//     console.log('no email')
// }

const userEmail2 = [] // empty array
// if(userEmail2){  //here its assuming the value to be true without comparing. so its a truthy value.
//     console.log('got the email')
// }else{
//     console.log('no email')
// }

// if(userEmail2.length===0){ // checking whether array is empty or not
//     console.log("the empty array")
// }


// const myobj = {}; // checking boject whether its empty or not
// if(Object.keys(myobj).length===0){
//     console.log("the empty object")
// }

// =======================================================

// Falsy Values : false, 0, -0, BigInt 0n, "", NaN, null, undefined.
// all the other values are truthy values.

// Truthy Values that surprises you : "0", "false", " ", [], {}, function(){}(this is c/d an empty function), 

// false == 0 gives true
// false =="" gives true
// 0 == "" gives true
// =========================================================================

// Nullish Coalescing Operator (??) :- the whole concept revolves around 'null' and 'undefined'

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined?? 15
val1 = null ?? 20 ?? 30

// console.log(val1);

// ===========================================================================

// Ternary Operator

// syntax = condition?true:false

// (2<3)?console.log("true"):console.log("false")

let a = 33;
a>33?console.log("student passed"):console.log('student failed')