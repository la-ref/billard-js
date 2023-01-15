class Stick {
    constructor(canvas){
        this.position = {x: 0,y: 400};
        this.canvas = canvas;
    }

    update(){
        this.position.x++;
    }

    drawImage(){
        this.canvas.drawImage(sprites.stick, this.position);
    }
}