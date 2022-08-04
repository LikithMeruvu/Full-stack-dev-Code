

let obj = {
    value:20,
    show(){
        console.log(value);
    }
};

let obj1 = {}; // empty object

for (const key in obj) {   // for in loop is used for cloning objects 
    obj1[key] = obj[key];
}
console.log(obj1);



// this Object.assign is used to clone object key/value to empty object(we can add additional key/value to it) and returns that empty object to the obj2

let obj2 = Object.assign({show1(){
    console.log("this is show 1")
}}, obj)

console.log(obj2);


// can also be assigned like this with no empty object
let obj3 = Object.assign(obj);
console.log(obj3);

let obj4 = {...obj2};
console.log(obj4);