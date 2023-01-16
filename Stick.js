class Stick {
    constructor(canvas){
        this.position = {x: 0,y: 400};
        this.canvas = canvas;
    }

    update(){
        var rect = this.canvas.getBoundingClientRect();
        this.position.x = mouse.position.x - rect.left;
        this.position.y = mouse.position.y - rect.top;

        if (mouse.left.pressed){
            console.log("test");
        }
    }

    drawImage(){
        this.canvas.drawImage(sprites.stick, this.position);
    }
}