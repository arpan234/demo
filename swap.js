var a = 5;
var b = 10;

console.log("before a is: " +a);
console.log("before b is: " +b);

// var temp = x;
// x = y;
// y = temp;

function swap(a,b){
    var temp = a;
     a = b;
     b = temp;

     return "done";
}

console.log("now a is: " +a);
console.log("now b is: " +b);