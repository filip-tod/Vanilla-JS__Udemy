var a = 1;
var b = a ;
a ++;
console.log(a);
console.log(b);

var house1 = {
    type: "terraced",
    town : "cambridge"
}
var house2= house1;

house1.town = "london";
console.log(house1);
console.log(house1);

//back to functions

var x = 1

//function that adds one to the copy x 
function addOne(){
    x++;
}
addOne(x);
console.log(x);



//pokusaj ovo

function add1(){
    x ++;

}
add1();
console.log(x);

// pass by refference
var persone1 = {
    name: "mike",
    age: 12
}
var person2= persone1;

function addYear(person){
    persone1.age ++;
}

addYear(persone1);
console.log(persone1);
console.log(person2);
