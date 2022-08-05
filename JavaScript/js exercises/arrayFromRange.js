let numbers = arrayRange(-10,10);

console.log(numbers);

function arrayRange(start, end) {
    let array = [];
    for(let i = start; i <= end; i++) 
        array.push(i);
    
    return array;
}