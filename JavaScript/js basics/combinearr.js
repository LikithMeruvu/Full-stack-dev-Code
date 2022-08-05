
let a = [1,2,3,4,5];
let b = [{id :1}];

let c = a.concat(b); // we can use this concat method to combine the arrays 
b[0].id = 10;  

// while combining the copies of the arrays will be assigned to that new variable 

let d = c.slice(2,4);  // or we can use this slice method which takes out the set of elements within the indexes

let e = [...a,'a',...b,'b'];  // we can use the spread operator to do this task efficiently (best approch)

console.log(c);
console.log(d);
console.log(e);


// @note  but while using this refrence type then the actual refrence will be asssigned to that array so anything chnages in that array then it will be effected to that main ones
