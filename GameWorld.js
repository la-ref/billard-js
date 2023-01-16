class GameWorld {
    constructor(canvas){
        this.canvas = canvas
        this.stick = new Stick(canvas,new Vector2(400,400));
        this.whiteBall = new Ball(canvas,new Vector2(400,400));
    }

    update(){
        this.stick.update();
        this.whiteBall.update();
    }

    draw(){
        this.canvas.drawImage(sprites.background, new Vector2(0,0));
        this.whiteBall.draw();
        this.stick.draw();
    }
}