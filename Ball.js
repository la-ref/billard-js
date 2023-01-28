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
        this.position = position ?? new Vector2();
        this.velocity = velocity ?? new Vector2();
        this.size = size ?? 18;
        this.color = color ?? "yellow";
        this.canvas = canvas;
        this.friction = 0.99;
    }

    colissionCheck(){
        if (this.position.x + this.size >= this.canvas.getWidth() - this.canvas.getBorder()){
            this.position.x = this.canvas.getWidth() - this.canvas.getBorder() - this.size;
            this.velocity.x *= -1;
        }
        else if (this.position.x - this.size <= this.canvas.getBorder()){
            this.position.x = this.canvas.getBorder() + this.size
            this.velocity.x *= -1;
        }
        
        
        if (this.position.y - this.size <= this.canvas.getBorder()) {
            this.position.y = this.canvas.getBorder() + this.size;
            this.velocity.y *= -1;
        }
        else if (this.position.y + this.size >= this.canvas.getHeight() - this.canvas.getBorder()){
            this.position.y = this.canvas.getHeight() - this.canvas.getBorder() - this.size;
            this.velocity.y *= -1;
        }

    }

    draw(){
        this.canvas.drawCircle(this.color,this.position.x,this.position.y,this.size);
    }

    updatePostion(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y; 
    }

    updateVelocity()
    {
        this.velocity.x *= this.friction;
        if (Math.abs(this.velocity.x) <= 0.05){
            this.velocity.x = 0
        }
        this.velocity.y *= this.friction;
        if (Math.abs(this.velocity.y) <= 0.05){
            this.velocity.y = 0
        }
    }

    update(){
        this.updatePostion();
        this.updateVelocity();
        this.colissionCheck();
    }


}