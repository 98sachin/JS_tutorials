//  there are two ways to declare an object 1. like literal 2. like constructor
// when you create an object using a constructor it creates a SINGLETON object

// const obj = {} // syntax of an object. one way to create an object.
// the other way to create an object is shown below
// Object.create // this is the way of creating object thorugh constructor method and sigleton is created in this.

// Object is JS has a concept of keys and values.

// 1. object literals

// const mySymbol = Symbol("key01") // put this symbol in the object and print

// const jsUsers = {name:"sachin","full name":"sachin sharma", [mySymbol]:"key01", age:26, email:"sadf@gsa.com", isLoggedIn: false, lastLogin:["monday","tuesday"]}

// ways to access object
// console.log(jsUsers.email)
// console.log(jsUsers["email"])
// console.log(jsUsers["full name"])
// console.log(jsUsers[mySymbol])
// console.log(typeof jsUsers[mySymbol])

// to change the values
// jsUsers.email = "sach123@gpt.com"
// console.log(jsUsers.email)
// console.log(jsUsers)

// if you wish nobody could change the values, then we can freeze/lock the values
// Object.freeze(jsUsers); // now if you make any changes it won't propagate

// console.log(jsUsers.email="asdf@asd.com")
// console.log(jsUsers)

// now lets add a function in the object jsUsers
// jsUsers.greeting = function(){
//     console.log("hello jsUsers");
// };
// console.log(jsUsers.greeting);
// console.log(jsUsers.greeting());
// console.log(jsUsers)

// jsUsers.greeting1 = function(){
//     console.log(`hello jsUsers, my name is ${this.name}`) // "this" is used when we want to refer the same object.
// }
// console.log(jsUsers.greeting1())

// ================================================================================================================

// declaring objects with constructors. Singleton 

// two ways to declare object
// 1. 
// const myObj = new Object() // this is a Singleton object
// 2.
// const myObj2 = {}; // this is not a singleton object
// both gives the same value.

const myUser = {};
myUser.id = "234sff";
myUser.username = 'jackSparrow';
myUser.age = 25;
myUser.email = 'asdf@sa.com';
myUser.password="asdf07908";
myUser.isLoggedIn = false;

// console.log(myUser)
// console.log(Object.keys(myUser));
// console.log(Object.values(myUser));
// console.log(Object.entries(myUser));
// console.log(Object.assign({}, myUser));
// console.log(Object.assign({}, myUser, { age: 30 }));

const regularUser = {
    email:"aaser@sd.com",
    fullname:{
        userfullname: {
            firstname:"sachin",
            lastname:"sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)


// combining objects
const obj1={1:"a", 2:"b", 3:"c",4:"d"}
const obj2={5:"e", 6:"f", 7:"g",8:"h"}

// console.log(obj1,obj2)
// console.log({obj1,obj2})
const obj3 = Object.assign(obj1,obj2)   
// console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)   // the correct way to combine an object using assign().
// console.log(obj4)

// Spread Operator is the most commonly used operator to combine objects
const obj5 = {...obj1,...obj2}
// console.log(obj5)


// when values are coming from database
// eg: if the data is coming form a user , it will come as an array of objects
const userObj = [
    {
        id: 12,
        email:'asdf@asd.com'
    },
    {
        id: 112,
        email:'asdxxf@asd.com'
    },
    {
        id: 12,
        email:'asdzzf@asd.com'
    },
]
// console.log(userObj[1].email)

// console.log(myUser)
// console.log(Object.keys(myUser)) // to get all the keys of an object, which is stored as an array
// console.log(Object.values(myUser)) // to get all the values of an object, which is stored as an array
// console.log(Object.entries(myUser)) // to get all the entries of an object, which is stored as an array inside an array
console.log(myUser.hasOwnProperty("password"))
console.log(myUser.hasOwnProperty("friendList"))
