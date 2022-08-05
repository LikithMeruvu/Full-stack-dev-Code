let arr = [3,4];

// insert at ending
arr.push(5,6);


// insert at starting
arr.unshift(1,2);


// insert at the index mentioned in the parameter in this case it is 2 index position
arr.splice(2,0,'a','b');

console.log(arr);

console.log(arr.indexOf('a'));
console.log(arr.indexOf('b')); 
console.log(arr.includes('c'));
console.log(arr.lastIndexOf('b'));
console.log(arr.indexOf(4 , 3));