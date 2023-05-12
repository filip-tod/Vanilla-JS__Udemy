// create a function
function kikirikiFunkcija(){
       console.log('p,p,p,poozdrav');
}
console.log(kikirikiFunkcija);
//poziv jednostavno upišeš ime funkcije i zagrade
kikirikiFunkcija();


function pozdrav(firstname){
    console.log('hello', firstname + "!");
}
var x = pozdrav('feećo');

//more than one parametar
function sum(a, b){
return a + b;
}
var c = sum(3, 7);
console.log(c);