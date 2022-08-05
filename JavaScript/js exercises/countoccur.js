
let num = [1,2,3,4,1,1,1];

let count = CountOccur(num,1);

console.log(count);

function CountOccur(array,element) {
    let c = array.reduce((accumulator,n)=> {
            if(n === element)
                accumulator++;
            return accumulator;
    },0);
    return c;
}