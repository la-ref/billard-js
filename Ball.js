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
        this.stopped = true;
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

    colissionBall(balls){
        balls.forEach(ball => {
            if (this != ball) {
                let distance = (new Vector2()).copy(this.position);
                console.log(distance)
                if (distance > this.size + ball.size) return;
                // const L = this.size + ball.size - distance
                // const xd = new Vector2(ball.position); xd.substract(this.position);
                // const vd = new Vector2(this.vel); vd.substract(ball.velocity);
                // const c = new Vector2(xd);c.scale(L/(2*distance))
                // this.position.substract(c)
                // ball.velocity.addition(c)
                // const w = new Vector2(xd); 
                // const scalaire = w.dotproduct(xd,vd)*1/Math.pow(distance,2);
                // w.scale(scalaire);
                // this.velocity.substract(w);
                // ball.velocity.addition(w);
            }
        })
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

    isStopped(){
        return this.velocity.x == 0 && this.velocity.y == 0
    }

    update(balls){
        this.updatePostion();
        this.updateVelocity();
        this.colissionCheck();
        this.colissionBall(balls);
    }


}