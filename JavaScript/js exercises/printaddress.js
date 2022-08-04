

let address = {
    street:`kotharoad`,
    city:`vizag`,
    zipcode:530001
};

function showaddress(address) {
    for(let key in address) {
        console.log(key, address[key]);
    }
}

showaddress(address);