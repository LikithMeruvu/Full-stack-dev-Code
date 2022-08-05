let a = [1,2,3,4];

let sum = 0;
for (const b of a) {
    sum += b
}
console.log(sum);

let sum1 = a.reduce((s,n)=> s+=n,0); // reduce(accmulator,currentvalue,accumulatorDefaultValue)
// here reduce is method which iterates over all elements of array and this methiod has a callback function where we can give our function to get sum of elements  here in this case the (s) parameter id sum = 0 ; and (n) parameter is for the element in the array and this returns the total sum of all the elements in that array 
// the 2nd parameter of n reduce method is initial value of accumulator

console.log(sum1);
