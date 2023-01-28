import { Vector2 } from "./Vector2.js";

export class Ball {
    /**
     * 
     * @param {Vector2} position 
     * @param {Vector2} velocity 
     * @param {number} size 
     * @param {string} color 
     */
    constructor(position,velocity,size,color){
        this.position = position ?? new Vector2()
        this.velocity = velocity ?? new Vector2()
        this.size = size
        this.color = color ?? "yellow"
    }
}