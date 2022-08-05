
let arr = [1,2,3,4,5,6];


// delete in ending 

let a = arr.pop();
console.log(arr);
console.log(a);


// delete in starting
let b = arr.shift();
console.log(arr);
console.log(b);


// delete in middle
let c = arr.splice(2,3,'a','b','c');
console.log(arr);
console.log(c);