function sum(a,b){
    return a + b;
}

var greet = function(name){
    console.log("hello" + name + " ! ");
}
greet("feco");
MyArray= [1,2,3];
myFunction(this.MyArray[1] + 2 + this.MyArray[2] + this.MyArray[3]);

function sum2(myFunction, MyArray){
    var result = 0;
    for(var i = 0; i < MyArray.lenght; i++){
        result += myFunction(MyArray[i]);
    }
    return result;
}

var i  = sum2(function(x) {
    return x * 2 ;
}, [1,2,3]);
console.log(y);