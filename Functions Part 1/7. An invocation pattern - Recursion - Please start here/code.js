// var factorial = function(n){
// var result = 1
// for(i = n; i > 0; i--){
//     result *= i;
// }
// return result;
// }

// 4: 1*2*3*4

console.log(factorial(3));     //1*2*3
console.log(factorial(4));     //1*2*3*4

//rekurzija
// var factorial= function(n){
//     return n * factorial(n-1);
// }

var factorial= function(n){
    if(n ==1 ){
        return 1
    }else{
        return n * factorial(n-1);
    }
}

// factorial(n) = n * (n-1) * factorial (n-2) ... * factoria (1)