
function New1address(st, city, zpcode) {
    this.street = st;
    this.city = city;
    this.zipcode = zpcode;
}

let a1 = new New1address('hi','vizag',530001);
let a2 = new New1address('hi','vizag',530001);
let a3 = a2;

function areequal(a1, a2) {
    for(let key in a1,a2) {
        if(a1[key] === a2[key]) 
            continue;
        else
            return false;
    }
    return true;
}
function aresame(a1, a2) {
    return a1 === a2;
}

console.log(areequal(a1,a2));
console.log(aresame(a1,a2));
console.log(aresame(a3,a2));