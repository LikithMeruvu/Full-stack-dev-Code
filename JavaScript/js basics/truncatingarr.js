
let num = [1,2,3,4,5];
let result = num;
num = [];
console.log(result);

// method to remove all elements from the array
// m-1(best)
num.length = 0;

//m-2
num.splice(0,num.length);

//m-3(depricated one)
while(num.length >0){
    num.pop();
}