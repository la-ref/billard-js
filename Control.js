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
        this._factor = 0.1
        this._whiteBall = false
        this.control()
        //this.whiteBallPlace()
    }

    control(){
        document.addEventListener("click", (e) => {
            //console.log(this._active)
            if (this._active && !this._whiteBall){
                this._active = false;
                this._ball.velocity.scale2(this._factor,this._vector)
            }

            if (this._whiteBall) {
                if (this._ball.checkBallReplace(this._mouse.position.x,this._mouse.position.y)){
                    this._whiteBall = false
                    this.setActive(true)
                }
            }
        })
    }

    whiteBallPlace(){
        if (!this._whiteBall) return;
        if (this._mouse.position.x >= this._canvas.getBorder() &&
            this._mouse.position.x <= (this._canvas.getBorder()+1/4 *(this._canvas.getWidth() - 2*this._canvas.getBorder()) && 
            this._mouse.position.y >= this._canvas.getBorder() && 
            this._mouse.position.y <= this._canvas.getHeight()-this._canvas.getBorder())) {

            this._ball.position.x = this._mouse.position.x
            this._ball.position.y = this._mouse.position.y
        }
    }

    update(){
        if (this._active){
            this._vector.substract2(this._mouse.position,this._ball.position)
            this._vector.limit(this._length)
        }
    }
    
    setActive(stopped){
        this._active = stopped
    }

    setWhiteBall(control){
        this._whiteBall = control
    }

    isPlacing(){
        return this._whiteBall
    }

    draw(){
        if (this._active && !this._whiteBall) {
            this._canvas.drawPath("white",this._ball.position.x,this._ball.position.y,this._vector.x,this._vector.y,10,"round");
        }
        console.log(this._whiteBall)
        if (this._whiteBall) {
            this._canvas.drawCircle("rgba(255,255,255,0.4)",this._mouse.position.x,this._mouse.position.y,this._ball.size);
        }
    }
}