const STICK_ORIGIN = new Vector2(970,11);

class Stick {
    constructor(canvas,position){
        this.position = (position !== null) ? position : new Vector2(400,400);
        this.canvas = canvas;
        this.rotation = 0;
    }

    update(){
        this.updateRotation();
    }

    draw(){
        this.canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN, this.rotation);
    }

    updateRotation(){
        var rect = this.canvas.getBoundingClientRect();
        let opposite = (mouse.position.y  - rect.top) - this.position.y;
        let adjacent = (mouse.position.x  - rect.left) - this.position.x;

        this.rotation = Math.atan2(opposite,adjacent);
    }
}