var totaVotes = 0;
var player1 = {
    name :"novak dokovic",
    votes : 0
};

var player2 = {
    name :"Rafael Nadal",
    votes : 0
};


function vote(player){
        player.votes++;
}

//ask for votes
while(totaVotes < 10){
    var choice = prompt("Rafael TYPE 1, NOVAK TYPE 2");
    if(choice === '1'){
        vote(player1);
        totaVotes++;
    }else if(choice === '2'){
        vote(player2);
        totaVotes++;
    }else{
    //   console.log("kikiriki poruka");
    }
}

//rezultat
console.log("rezultat nadal" + player2.votes + " bodova.");
console.log("rezultat dokovic" + player1.votes + " bodova");

//tko je favorit
if(player1.votes < player2.votes){
    player1.name + "is the favtite to win.";
}else if(player1.votes > player2.votes){
    player2.name + "is the favtite to win.";
}else{
    console.log("nema pobjednika");
}