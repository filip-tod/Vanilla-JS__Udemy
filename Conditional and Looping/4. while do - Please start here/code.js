var x = 0;
while(x < 5){
       console.log(x);
       x++;
}

var balance = prompt("how much would you like to spend in our shop ? :");
var itemNumber= 0;

while(balance > 0){
      //random item
      var itemPrice = 
      Math.floor(1 + 100*Math.random());
      //pick item
      if(itemPrice <= balance){
        //buy
        balance -= itemPrice;


        console.log(itemNumber + "item price : " + itemPrice);
        console.log("balance is :" + balance + ".");
      }
}