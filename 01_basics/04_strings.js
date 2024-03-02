// normal way of writing string is using single/double quotes
// let firstName = "Sachin"; // one way of declaring srting
// let lastName = 'Sharma'
// console.log(firstName+" "+lastName);

// GOOD way to write a string is to use Backticks(``). This plays a important role in "string interpolation"
// console.log(`Hello my name is ${firstName} and I'm planning to leave my job.`)

// const newString = new String("sachin"); // another way of declaring string.
// console.log(newString);
// console.log(typeof newString);
// console.log(newString[0]);
// console.log(newString.__proto__); // works better is browser's console
// console.log(newString.length)
// console.log(newString.toUpperCase())
// console.log(newString.charAt(4))
// console.log(newString.indexOf('i'))

// const a = newString.substring(0,4); //substring doesn't uses negative value
// console.log(a)

// const b = newString.slice(0,4);
// console.log(b)
// const c = newString.slice(-6,2);
// console.log(c)

// ****TRIM****
// const myString = "   Sachin    "
// console.log(myString)
// console.log(myString.trim()) // removes the extra spaces from the start and the end of a string

// *****REPLACE******
// const url= "https://sachin.com%22/login"
// // console.log(url.replace('%22',"/body"))
// console.log(url.includes('sachin'))

// ****SPLIT******
const abc = "sachin-sharma-020304-yes";
console.log(abc.split('-'))