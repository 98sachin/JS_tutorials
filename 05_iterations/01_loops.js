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