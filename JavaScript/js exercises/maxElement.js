
let arr = [7,89,890,6868];

const max = getMax(arr);
console.log(max);

function getMax(arr) {
    if(arr.length === 0) return undefined;
    // let max = arr[0];
    // for(let i of arr) 
    //     if(i >max )
    //         max =i;
    // return max;

    //optimised code
    let max = arr.reduce((a,c)=> (a>c)?a:c);
    // by default if we dont keep any value for the accumulator then it takes the starting value of the array
    return max;
}