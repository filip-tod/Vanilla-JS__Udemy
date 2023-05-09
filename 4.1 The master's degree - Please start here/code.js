// varijable mark1 do 5 gdje upisujemo bodove
var mark1 = prompt('please enter the first module mark');
var mark2 = prompt('please enter the second module mark');
var mark3 = prompt('please enter the third module mark');
var mark4 = prompt('please enter the fourth module mark');
var mark5 = prompt('please enter the fifth module mark');

console.log("you'r result is : ");
console.log("module 1 mark:" + mark1 + ".");
console.log("module 2 mark:" + mark2 + ".");
console.log("module 3 mark:" + mark3 + ".");
console.log("module 4 mark:" + mark4 + ".");
console.log("module 4 mark:" + mark5 + ".");

//create pass variable
var pass1 = mark1 >= 60 ? 1 : 0;
var pass2 = mark2 >= 60 ? 1 : 0;
var pass3 = mark3 >= 60 ? 1 : 0;
var pass4 = mark4 >= 60 ? 1 : 0;
var pass5 = mark5 >= 60 ? 1 : 0;

//calkuliranje broja modula koji su prosli
var numModulesPassed = pass1 + pass2 + pass3 + pass4 + pass5;
console.log('you passed ' + numModulesPassed + 'modules.');

//srednja vrijednost
var avrage = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
avrage= avrage .toFixed(2);
console.log('your avrage mark is:' + avrage);
//prolaz ili ne 
var pass= (avrage>=60) && (numModulesPassed>=4);
console.log('prošao si wuhu');

var result = pass ? 'ćestitke' : 'više sreće drugi put';
console.log(result);