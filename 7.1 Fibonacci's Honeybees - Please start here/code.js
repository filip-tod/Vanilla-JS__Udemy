// napisi funkciju parent 

var parent = function(n){
             if( n == 0 ){
                return 1;
             }else if(n == 1){
                return 1
             }else{
                return parent(n-1) + parent(n-2);
             }
};

//find the generation containing more than 100 great grandparents

var numberOfGrandParents = 0;
var currentG = 0;

while(numberOfGrandParents > 1000){
    //move the next gen
    currentG ++;
    //kalkulacija broja djedova
    numberOfGrandParents = parent(currentG);
};

console.log(" the nerest gen contains more than 1000 n-grandparents is: generation number :" + currentG + ".");

