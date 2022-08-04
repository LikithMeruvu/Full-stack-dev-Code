console.log(sum(12));

function sum(a){
    let count = 0;
    for(let i=0; i<=a; i++){
        if(i % 3 === 0 || i % 5 === 0){
            count += i;
        }
    }
    return count;
}
// function to calculate the sum of the factors of the given numbers in specific limit 
