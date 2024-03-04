// Immediately Invoked Function Expressions (IIFE)
// to immediately execute a function

// (this 1st parenthesis is used to write the function)(2nd paranthesis is the execution call)

// the below code is a named iife
(function chai(){
    console.log("db connected")
})(); // iife don't where to stop , so do not forget to write the ";" to end it.

// Q. what is iife and why it is used?
// iife is something we use to run the function immediately . iife is used to prevent from the pollution of global scope so remove the variabls or any declaration of the global scope we use iife. 

// the below code is a simple iife
(()=>{
    console.log("db connected two")
})();

((name)=>{
    console.log(`${name}`)
})("sachin");