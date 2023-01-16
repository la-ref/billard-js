const BALL_ORIGIN = new Vector2(25,25);

class Ball{
    constructor(canvas,position){
        this.position =  (position !== null) ? position : new Vector2();
        this.canvas = canvas
    }

    update(){

    }
    
    draw(){
       this.circle = new Circle(this.position,24, this.canvas.getContext()); 
    }
}