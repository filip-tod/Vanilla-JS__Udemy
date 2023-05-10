//varijabla result koji je finalni rezulatat

var result = "Activity - Duration";

//remaining time 24 hours
var remainingTime = 24;
//prompt korisnika da napisi activity
var activity = prompt("please enter a activity");


while(remainingTime > 0){
    var activity = prompt("please enter an activity: ");
//duration
var duration ;
do{
   var duration = prompt("koliko dugo traje aktivnost ? (koristi decimalni broj 3.25)\nYou have "+ remainingTime +" h left.");
   duration= parseFloat(duration);
}while(duration > remainingTime && isNaN(duration));
remainingTime -= duration;
result += "\n" + activity + "-" + duration + "hours.";
}
