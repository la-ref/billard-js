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
        this.friction = 0.989;
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

                let distance = this.position.copy(); 
                distance = distance.distance(ball.position)
                const r = (ball.size + this.size)
                if (distance <= r){
                    this.bounce(this,ball,distance,r)
                    // const norme = ball.position.copy();
                    // norme.substract(this.position)

                    // const profondeur = r - distance

                    // const normale = norme.copy();
                    // normale.scale(1/distance)

                    // const tx = -normale.y
                    // const ty = normale.x

                    // const dpt1 = this.velocity.x * tx + this.velocity.y * ty
                    // const dpt2 = ball.velocity.x * tx + ball.velocity.y * ty

                    // const dpn1 = this.velocity.x * normale.x + this.velocity.y * normale.y
                    // const dpn2 = ball.velocity.x * normale.x + ball.velocity.y * normale.y

                    // const v1 = (dpn1 * (this.mass - ball.mass) + 2.0 * ball.mass * dpn2) / (this.mass + ball.mass)
                    // const v2 = (dpn2 * (ball.mass - this.mass) + 2.0 * this.mass * dpn1) / (this.mass + ball.mass)

                    // const normale2 = normale.copy()
                    // const normale3 = normale.copy()
                    // normale.scale(-1);normale.scale((profondeur/2))
                    // normale2.scale((profondeur/2))

                    // this.position.addition(normale)
                    // ball.position.addition(normale2)

                    // this.velocity.x = tx * dpt1 + normale3.x * -Math.abs(v1)
                    // this.velocity.y = ty * dpt1 + normale3.y * -Math.abs(v1)
                    // ball.velocity.x = tx * dpt2 + normale3.x * Math.abs(v2)
                    // ball.velocity.y = ty * dpt2 + normale3.y * Math.abs(v2)
                }
            }
        })
    }

    bounce(b1,b2,distance,r){
        const dx = b2.position.x-b1.position.x
        const dy = b2.position.y-b1.position.y

        const unitContactX = dx / distance
        const unitContactY = dy / distance

        const u1 = b1.velocity.x * unitContactX + b1.velocity.y * unitContactY
        const u2 = b2.velocity.x * unitContactX + b2.velocity.y * unitContactY

        const u1PerpX = b1.velocity.x - u1 * unitContactX
        const u1PerpY = b1.velocity.y - u1 * unitContactY
        const u2PerpX = b2.velocity.x - u2 * unitContactX
        const u2PerpY = b2.velocity.y - u2 * unitContactY

        b1.velocity.x = u2 * unitContactX + u1PerpX
        b1.velocity.y = u2 * unitContactY + u1PerpY
        b2.velocity.x = u1 * unitContactX + u2PerpX
        b2.velocity.y = u1 * unitContactY + u2PerpY

        const profondeur = r - distance

        const norme = b2.position.copy();
        norme.substract(b1.position)

        const normale = norme.copy();
        normale.scale(1/distance)

        const normale2 = normale.copy()
        normale.scale(-1);normale.scale((profondeur/2))
        normale2.scale((profondeur/2))

        b1.position.addition(normale)
        b2.position.addition(normale2)

    }

    bouncev2(ball1,ball2){

        let power = (Math.abs(ball1.velocity.x) + Math.abs(ball1.velocity.y)) + 
                    (Math.abs(ball2.velocity.x) + Math.abs(ball2.velocity.y));
        power = power * 0.003;

        const opposite = ball1.position.y - ball2.position.y;
        const adjacent = ball1.position.x - ball2.position.x;
        const rotation = Math.atan2(opposite, adjacent);

        const velocity2 = new Vector2(90*Math.cos(rotation + Math.PI)*power,90*Math.sin(rotation + Math.PI)*power);
        ball2.velocity.addition(velocity2);
        const velocity1 = new Vector2(90*Math.cos(rotation)*power,90*Math.sin(rotation)*power);
        ball1.velocity.addition(velocity1);
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