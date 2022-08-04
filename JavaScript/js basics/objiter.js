
let hi = {
    value:10,
    func(){
        console.log('hello');
    }
};

for (const key in hi) {
    console.log(key, hi[key]);
}

// we cant use for of loop for the function because the functions are not iterable 

// but we can use for of loop in this way 


for (let key2 of Object.keys(hi)) {  // this Object.keys(obj) returns an string array of properties and methods
    console.log(key2);
}

for (let key1 of Object.entries(hi)) { // entries function Returns an array of key/values of the enumerable properties of an object
    console.log(key1);
}

if('radius' in hi) {
    console.log('yes present');
}