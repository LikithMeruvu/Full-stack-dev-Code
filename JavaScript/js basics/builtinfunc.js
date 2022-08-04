
function Circle(radius){
    this.radius = radius;
    this.showrad = function(){
        console.log(this.radius);
    }
}

let c1 = new Circle(6);
console.log(c1);
// there is another way to intialize a object
// using the new Function built in constructor

let c2 = new Function('radius',`this.radius = radius;
this.showrad = function(){
    console.log(this.radius);
}`)     //we can use this as new constructor for the objects

let c = new c2(4);
console.log(c);

let c3 = c2.call({} ,1);
console.log(c3);