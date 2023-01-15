class GameWorld {
    constructor(canvas){
        this.canvas = canvas
        this.stick = new Stick(canvas);
    }

    update(){
        this.stick.update();
    }

    draw(){
        this.canvas.drawImage(sprites.background, {x:0, y:0});
        this.stick.drawImage();
    }
}