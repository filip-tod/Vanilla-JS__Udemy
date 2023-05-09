var user = {};
user.spol= prompt('upiši spol ( male , female )');
user.spol = user.spol.toLowerCase();

user.time = prompt('upiši vrijeme');
user.time = parseFloat(user.time);


var male={
    name: 'male',
    recordTime: 9.58
}

var female = {
    name: 'female',
    recordTime: 10.49
}

if(user.spol == 'male'){
    if(user.time > male.recordTime){
console.log('svaka čast brži si od bolta !');
}else{
console.log('šteta nisi brži od bolta');
}

}else if(user.spol == 'female'){
    if(user.time > male.recordTime){
console.log('svaka čast brža si  od najbrže žene !');
}else{
console.log('šteta nisi brži od najbrže žene');
}

}else if(user.spol !='male' && user.spol != 'female'){
console.log('nisi dobro upisao svoj spol');
}
