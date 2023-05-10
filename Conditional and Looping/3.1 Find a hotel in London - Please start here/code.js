//create the hotel objects
var hotel1 = {
    name: "Forest view Hotel",
    price: 51,
    distance: 6.8
};
var hotel2 = {
    name: "OYO Abbey Hotel",
    price: 52,
    distance: 3.7
};
var hotel3 = {
    name: "Camden Belmont",
    price: 69,
    distance: 2.8
};
var hotel4 = {
    name: "St Athans Hotel",
    price: 74,
    distance: 1.2
};
var hotel5 = {
    name: "St Giles London",
    price: 139,
    distance: 0.7
};
var hotel6 = {
    name: "Ashburn Hotel",
    price: 153,
    distance: 2.6
};

var hoteli = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];
var rezultat = "ovo su mogući hoteli za tebe : "
for(var i = 0; i < hoteli.length; i++){
    rezultat += "\n Hotel" + hoteli[i].name + ", cijena po noći" + hoteli[i].price + ", distanca do destinacije" + hoteli[i].distance + "." ;
}
console.log(rezultat);

var maxCijena = prompt('upišite koliko ste voljni platiti: ');
budzet = parseFloat(maxCijena);

var maxUdaljenost = prompt('upišite koliko ste voljni daleko voizi: ');
daljina = parseFloat(maxUdaljenost);

rezultat = "";

for(var i = 0; i < hoteli.length; i++){
   if(hoteli[i].price <= budzet && hoteli[i].distance <= daljina){
    rezultat += "\n Hotel" + 
   hoteli[i].name + ", cijena po noći" + 
   hoteli[i].price + ", distanca do destinacije" + 
   hoteli[i].distance + "." ;
} 
 }

 console.log(rezultat);

