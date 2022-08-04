
const obj ={
    title:'avengers',
    money : 10000000000,
    description:'good movie',
    best_actor : 'RDJ',
    best_role :'iron man'
};

function showproperties(obj){
    for (const key in obj) {
       if(typeof obj[key] === 'string') {
            console.log(obj[key]);
       }
    }
}

console.log(showproperties(obj));