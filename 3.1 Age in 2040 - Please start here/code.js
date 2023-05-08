var firstName = prompt('please enter firt name');
var lastName = prompt('please enter last name');
var yearOfBirth = prompt('please enter year of birth');

yearOfBirth = parseInt(yearOfBirth);

var fullName = firstName + ' ' + lastName + '.';
console.log(fullName);

var futureAge = 2040 - yearOfBirth
console.log(futureAge);

var sentence2 = ' you"r age will be ' + futureAge + '.';
console.log(sentence2);

var finalRes = fullName + sentence2;
console.log(finalRes);

