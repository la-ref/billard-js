import { Canvas2D } from "./Canvas.js";
export class Hole {
    constructor(pos,canvas){
        this.position = pos
        this.canvas = canvas
    }

    draw(){
        this.canvas.drawCircle("black",this.position.x,this.position.y,30)
    }

    update(){
    }
}