let a = [1,2,3];
let b = [4,5,-6];

let a1 = a.every((element) => element >= 0);   // this call back function returns boolean 
let b1 = b.every((element) => element >= 0);  // this call back function returns boolean

console.log(a1,b1);

// every method is method which points to the very element in the array and the logic has to be implemented using the call back function

let a2 = a.some((element) => element >= 0);    // this call back function returns boolean
let b2 = b.some((element) => element >= 0);  // this call back function returns boolean

// filter method also used to filter an array uding some conditions 

let a3 = b.filter(n => n >3);  // returns an array of the filtered elements
console.log(a3)
