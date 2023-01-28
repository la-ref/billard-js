import { Vector2 } from "./Vector2.js";
import { Canvas2D } from "./canvas.js";

export class Ball {
    /**
     * 
     * @param {Vector2} position 
     * @param {Vector2} velocity 
     * @param {number} size 
     * @param {string} color 
     * @param {Canvas2D} canvas 
     */
    constructor(position,velocity,size,color,canvas){
        this.position = position ?? new Vector2()
        this.velocity = velocity ?? new Vector2()
        this.size = size ?? 18
        this.color = color ?? "yellow"
        this.canvas = canvas
        this.draw()
    }

    draw(){
        this.canvas.drawCircle(this.color,this.position.x,this.position.y,this.size)
    }
}