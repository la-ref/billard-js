import { Vector2 } from "./Vector2.js";
import { Canvas2D } from "./Canvas.js";
export class Control {

    /**
     * 
     * @param {Canvas2D} canvas 
     */
    constructor(ball,mouseHandler,canvas){
        this._ball = ball
        this._mouse = mouseHandler
        this._canvas = canvas
        this._vector = new Vector2()
        this._active = true
        this.control()
    }

    control(){
        document.addEventListener("click", (e) => {
            console.log(this._vector.x)
            if (!this._active) return;
            this._active = false;
            const factor = 0.08;
            this._ball.velocity.x = factor * this._vector.x
            this._ball.velocity.y = factor * this._vector.y
        })
    }

    update(){
        this._vector.x = this._mouse.position.x - this._ball.position.x
        this._vector.y = this._mouse.position.y - this._ball.position.y
    }
    
    setActive(stopped){
        this._active = stopped
    }

    draw(){
        if (!this._active) return;
        this._canvas.drawPath("white",this._ball.position.x,this._ball.position.y,this._mouse.position.x,this._mouse.position.y,10,"round");
    }
}