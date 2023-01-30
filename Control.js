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
        this._length = 300
        this.control()
    }

    control(){
        document.addEventListener("click", (e) => {
            if (!this._active) return;
            this._active = false;
            const factor = 0.1;
            this._ball.velocity.scale2(factor,this._vector)
        })
    }

    update(){
        this._vector.substract2(this._mouse.position,this._ball.position)
        this._vector.limit(this._length)
    }
    
    setActive(stopped){
        this._active = stopped
    }

    draw(){
        if (!this._active) return;
        this._canvas.drawPath("white",this._ball.position.x,this._ball.position.y,this._vector.x,this._vector.y,10,"round");
    }
}