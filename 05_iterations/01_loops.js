// for loop

// for (let i = 0; i<=10; i++ ){
//     const element =i;
//     console.log(element)
// }
// console.log(element); // gives error as it is out of scope

// for (let i = 0; i<=10; i++){
//     const num = i;
//     if(i==5){
//         console.log("its 5")
//     }
//     console.log(num)
// }

// loops inside loop
for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value: ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`inner loop value ${j}  and inner loop ${i}`)
        // console.log(i+" * "+j+" = "+(i*j))
    }
    
}


let myarr = ["IronMan","SuperMan","SpiderMan"];
for(let i= 0; i<=myarr.length; i++){
    const val = myarr[i]
    // console.log(val)
}

// ========================================================================

// Break and Continue

// for (let i=1 ; i<=20; i++){
//     if(i==5){
//         console.log(`detected 5`)
//         break;
//     }
//     console.log(`the value of i is ${i}`)
// }

for (let i=1 ; i<=20; i++){
    if(i==5){
        // console.log(`detected 5`)
        continue;
    }
    // console.log(`the value of i is ${i}`)
}

// =======================================================================================

// While loop

let i = 0;
while(i<=10){
    // console.log(`the value is ${i}`)
    // i++;
    i = i+2;
}

let hero = ['ironman', 'superman', 'batman','spiderman','shaktimaan'];
let arr = 0;
while(arr<hero.length){
    // console.log(`the hero is ${hero[arr]}`)
    arr++
}

// Do-While loop

let score = 11;
do{
    console.log(`the score is ${score}`);
    score++
}while(score<=10);  

// =============================================================================================================================================

//  for-each loop

const coding = ["html", "css", "javascript", "react", "nodejs", "express"];

const values = coding.forEach((item) => {
  // console.log(item); // try printing this code with and without commenting this line
  return item; // try printing this code with and without commenting this line
});
// console.log(values);

// the result will always have an undefined value because the forEach loop does not return anything.

// Example 1:

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// understanding the filter method
// 1.
// let newNums = myNums.filter((num) => num > 4);
// 2.
// let newNums = myNums.filter((num) => {
//   return num > 4;
// });

// the above two examples are the same, the second one is just a bit more detailed with the curly braces and the return keyword. The first one is a shorthand version of the second one. Both will give the same result. Check by printng the second eg withou the return keyword.
// The thing to remember is that whenever we use the curly braces i.e., scope, we have to use the return keyword to return the value.

// Using for-each loop to filter the numbers greater than 4
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

// Example 2:

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure" },
  { title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Sal inger",
    genre: "Fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
  },
  { title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery" },
];
// books is an array of objects
// we want to get the titles of the books that are in the fiction genre
// we can use the filter method to achieve this
const userBooks = books.filter((book) => book.genre === "Fiction");
console.log(userBooks);
