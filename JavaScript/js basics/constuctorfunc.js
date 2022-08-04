
function Circle(r){
    this.radius =r,
    this.showrad = function(){
        console.log(this.radius);
    }
    // return this;  this is optional it will automatically returns the this 
}

let c = new Circle(5);  // same as java object creations we have to use the new keyword 

console.log(c);
c.showrad();
