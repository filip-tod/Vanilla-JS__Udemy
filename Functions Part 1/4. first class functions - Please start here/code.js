var sumFunction = function sum(a,b){
    return a + b;
}
console.log(sumFunction(1,3));
//use values to set object proporties
var myPhone = {
    make: "Apple",
    model: "Iphone 6",
    warranty: 12,
    color: "gold",
    showwarrantyDetails: function(){
        console.log("this phone comes with" + this.warranty + "months warranty!");
    }
}
myPhone.showwarrantyDetails();

//pass a value to a function
function f(x){
    return Math.pow(x, 2);

}
console.log(f(2));

function g(myFunction, a, b){
    return myFunction(a) + myFunction(b)
}
console.log(g(f,3,4));

function add(x){
    return function(a){
        return a + x;
    }
}
var addOne = add(1);
console.log(addOne(3));
var addTwo = add(2);
console.log(addTwo(5));