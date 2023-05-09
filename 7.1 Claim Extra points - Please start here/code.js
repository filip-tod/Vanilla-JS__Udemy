var student1 = {
    name: 'mark',
    grade: 80
};
var student2 = {
    name: 'john',
    grade: 75
};
var student3 = {
    name: 'sarah',
    grade: 90
};

    var avrage = ((student1.grade + student2.grade + student3.grade)/3).toFixed(2);
    console.log(avrage);
//extra bodovi
    var extra = 15;

    student1.grade += extra;
    console.log(student1);

