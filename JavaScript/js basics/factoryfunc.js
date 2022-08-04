
// factory function returns the objects;
// basically this works like the class of the obejcts we can create no of objects using this factory functions

function createcircle(r) {
    return {
        r,
        showrad() {
            console.log('radius :'+r);
        },
    }
}

let circle = createcircle(4);
console.log(circle);
circle.showrad();

let circle1 = createcircle(7) 
console.log(circle1);
circle1.showrad();