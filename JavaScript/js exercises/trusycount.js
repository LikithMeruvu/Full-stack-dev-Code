
const arr = [null ,undefined, 0,'',true,false ,1 , 2 ,NaN];

console.log(counttrusy(arr));

function counttrusy(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]) count++;
    }
    return count;
}


// function to count trusy values using if statements