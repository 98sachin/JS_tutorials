

function name() {
    console.log("S")
    console.log("A")
    console.log("C")
    console.log("H")
    console.log("I")
    console.log("N")
};

// name; // this only gives the reference of a function
// name(); // this is how we call a function
// name();
// name();
// name();
// name();

function fun1(num1, num2) {
    console.log(num1 + num2)
}
// fun1(2, 3)
// fun1(22, 30)
// fun1(22, "a")
// fun1(22, null)

// const result = fun1(5,4);
// console.log("Result: ",result)


function fun2(num3, num4){
    // let result = num3+num4
    // return result
    // OR 
    return num3+num4
}
// console.log(fun2(4,3))

function loginUserMsg(username){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMsg())
// console.log(loginUserMsg("sachin"))

// you can also assign a value to a function in the parameter
function fun5(username="sam"){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in.`
}
// console.log(fun5())
// console.log(fun5("sachin"))

// ===============================================================================================================

function calculateCartPrice(...num){ // the 3 dots when used in function is called a rest operator
        return num
}
// console.log(calculateCartPrice(345,456,234)) // puts all the values is an array

function cal1(val1,val2,...num1){
    return num1
}
// console.log(cal1(123,234,345,456,567)) // here val1=123, val2=234 and others are in num1


// passing/using an object in a function
const user = {
    username: "sachin",
    age:26
}

function account(anyObj){
    console.log(`the username is ${anyObj.username} and the age is ${anyObj.age}`)
}
// account(user)
// OR
// account({
//     username:"mr.sharma",
//     age:30
// })

//passing an array to a function
const myNewArray = [234,456,5678]
function returnSecondValue(getArray){
    return getArray[1]
}
// returnSecondValue(myNewArray)
// console.log(returnSecondValue(myNewArray))