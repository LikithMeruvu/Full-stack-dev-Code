

let address = {
    street: `kotharoad`,
    city: `vizag`,
    zipcode: 530001
};

function newAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
};

function New1address(st, city, zpcode) {
    this.street = st;
    this.city = city;
    this.zipcode = zpcode;
}

let ad1 = newAddress('st town road', 'vizag', '435001');

let ad2 = new New1address('kummadhi', 'vizag', '430009');

function showaddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

console.log(showaddress(ad1));
console.log(showaddress(ad2));