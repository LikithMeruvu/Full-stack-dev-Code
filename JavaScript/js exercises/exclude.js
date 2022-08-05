
let array = [1,2,3,4,5];

let ex = [3,4];

console.log(Exclude(array,ex));

function Exclude(array,ex) {
    let output = [];
    for(let index of array) {
        if(!ex.includes(index)) 
            output.push(index);
    }

    return output;
}


// this function removes the set of values(with/without repitition) in array using includes predefined method 