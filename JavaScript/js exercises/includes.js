let num = [1,-1,'a','ba',4,5,`hello world`];

console.log(includes1(num,'a'));

function includes1(array,element) {
    for (const a of array)
        if(a === element)
            return true;
    
    return false;
}