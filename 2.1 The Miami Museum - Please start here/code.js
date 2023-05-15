function greet(language){
    if(language.toLowerCase() === "english"){
        return function(name){
            return language + " " + name;
        }
    }else if(language.toLowerCase() === "spanish"){
        return function(name){
            return language + " " + name;
        }
    }else{
        return function(name){
            return language + " " + name;
    }
    }
    }