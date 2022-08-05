
let arr = [
    {name:'x',value:10},
    {name:'y',value:20}
];

// console.log(arr.indexOf({name:x,value:10}));   we can use this type of array operations on reference types so we use a another method called find

let result = arr.find(function(element){  // this element parameter acts as a key to that objects || index of array 
    return element.name ==='y' && element.value === 20;
});
console.log(result);


// this is called an arrow function which is ueed to reduce the  memory usage 
let r1 = arr.find(element => element.name === 'x');



// we can also find the index of the object in the array like this
// let result = arr.findIndex(function(element){
//     return element.name ==='y';
// });