// objekat je istanca klase

var myPhone = {
    make: "apple", //klasa sa svojim atributom
    model:"Iphone 7",//klasa sa svojim atributom
    warranty: 12,//klasa sa svojim atributom
    color:"Gold"//klasa sa svojim atributom
}

console.log(myPhone);
console.log(myPhone.model);

//change property
myPhone.model= "iphone 6";
console.log(myPhone);

myPhone.storage = "64 Go";
console.log(myPhone);

delete myPhone.storage;
console.log(myPhone);

//

var x = 1;
var y = x; //y ima vrijednost x nakon sto smo promjenili vrijednost jer se vrijednost promjenila u sljedećem redu
x=2;
console.log(y);

//

var myotherPhone= myPhone;
console.log(myotherPhone);

//

myPhone.color="grey";// objekat poprima novu vrijednost
console.log(myPhone.color);
console.log(myotherPhone.color);