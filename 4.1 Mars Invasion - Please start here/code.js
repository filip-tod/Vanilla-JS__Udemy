//START
var robot = {
    name: "Mars Invader",
    coordinates: {
        x:0,
        y:0,
        z:0
    }
};

//add the check method
robot.check = function(){
    console.log("robot position : x =" + this.coordinates.x + 
    ", y=" + this.coordinates.y + 
    ", z= " + this.coordinates.z + "." );
//
if(this.coordinates.x === 4 && 
   this.coordinates.y === 2 && 
   this.coordinates.z === 3){
   console.log("mission complete");
}
};

//add moveRight and moveLeft
robot.moveRight = function(){
    if(this.coordinates.x !== 10){
        this.coordinates.x ++;
    }
    this.check();
};
robot.moveLeft = function(){
    if(this.coordinates.x !== 0){
        this.coordinates.x --;
    }
    this.check();
};
//gore dolje
robot.moveForward = function(){
    if(this.coordinates.y !== 10){
        this.coordinates.y ++;
    }
    this.check();
};
robot.movebakward = function(){
    if(this.coordinates.y !== 0){
        this.coordinates.y --;
    }
    this.check();
};
