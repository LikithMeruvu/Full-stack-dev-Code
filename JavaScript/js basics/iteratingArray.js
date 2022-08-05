
let a = [20,30,40,50];

for(let index of a) {
    console.log(index);
}
// we can use for of loop also but we cant get the index and element parallel 

let result = a.forEach((index,element) => console.log(index,element)); 
 // we can use the forEach method also to iterate the array  and we can use the arrow function to it
 // in here we can pass additional arguments to that forEach method and we can print the indexes also

console.log(result);