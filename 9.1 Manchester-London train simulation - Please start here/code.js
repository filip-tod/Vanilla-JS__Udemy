//vijezba sa ugrađenim funkcijama

var journey = [
    {
        stop: "Manchester Piccadilly",
        min: 0
    },
    {
        stop: "Stockport",
        min: 11
    },
    {
        stop: "Wilmslow",
        min: 23
    },
    {
        stop: "Crewe",
        min: 29
    },
    {
        stop: "Stafford",
        min: 37
    },
    {
        stop: "Lichfield Trent Valley",
        min: 50
    },
    {
        stop: "Tamworth",
        min: 65
    },
    {
        stop: "Nuneaton",
        min: 80
    },
    {
        stop: "Rugby",
        min: 88
    },
    {
        stop: "Northampton",
        min: 103
    },
    {
        stop: "Milton Keynes Central",
        min: 111
    },
    {
        stop: "Watford Junction",
        min: 125
    },
    {
        stop: "London Euston",
        min: 140
    }

];

//program counter koji raste za 1 svaku sekundu

coutner = 0;
//ako koristim ovu sintaksu moram je staviti gore iznad funkcije 1 jer je ne koristim u global scoupu
var checkStation = function(min){
    for(var i = 0; i < journey.length; i++){
        if(min === journey[i].min){
            var zvanje = "stopping at";
            if(journey[i].stop === "Manchester Piccadilly"){
              zvanje = "departing from"  
            }else if(journey[i].stop === "London Euston"){
                zvanje = "Last Station"
            }
            console.log("stoping at" + journey[i].stop + ".");
        }
    }
};

var run = setInterval(function(){
    console.log(converter(counter));

    //check dali je counter  sa stop time
    checkStation(counter);

    coutner++;
    if(counter === 141){
    clearInterval(run);
    }
},1000);

//part 2 koristimo ugrađene funkcije

//add zero func
var addZero = function(min){
if(min < 10){
    return("0" + min);
}else{
    return min;
}
};

var converter= function(min){
if(min < 60){
    return( "14:" + addZero(min) + ".");
 }else if(min < 120){
    min -= 60;
       return ("15:" + addZero(min) +".");
    }else{
        min -= 120;
        return("16:" + addZero(min) +".");
    }
};
var convert2= function(min){
    var departH = 14;
    var departM = 0;
    var departC = departH * 60 * departM;
    var convertedM = departC + min;

    var sati = math.flor(convertedM/60);
    var minute = convertedM%60;

    return sati + " . " + addZero(min);
}


