
function add(n1 , n2) {return n1 + n2;}
function mul(n1 , n2) {return n1 * n2;}
function cal(n1 , n2, op,op1) {return op(n1,n2)+ " " +op1(n1,n2); }

console.log(cal(3,3,mul,add));