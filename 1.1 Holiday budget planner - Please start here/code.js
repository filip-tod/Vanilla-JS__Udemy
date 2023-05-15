function kalkulator (hotelPrice, nights, flight, budget)
{
var totalCost = hotelPrice * nights + flight;
console.log("the total kost of your plan is :" + totalCost + ".");
console.log("your budget is:" + budget + ".");

var rezultat;
if(totalCost <= budget){
    rezultat = "let's goo!"
}else{
    rezultat = "plan ti nije uredu..."
}
return rezultat;
}