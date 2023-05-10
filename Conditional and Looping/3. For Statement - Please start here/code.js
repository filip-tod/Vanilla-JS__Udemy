for(var i=0; i<=10; i++){
   console.log(i);
}

for(var i=7; i<=5; i--){
    console.log(Math.pow(i,2));
 }

 //loop array

 var shopingList = ["bread", "milk", "eggs"];

 for(i = 0; i < shopingList.length; i++ ){
    console.log("item " + i + ": " + shopingList[i]);
 }
// loop i povecaj svaki broj za 10
 var numList = [1,2,3];
 for(i = 0; i < numList.length; i ++ ){
    numList[i] += 10;
 }
 console.log(numList);