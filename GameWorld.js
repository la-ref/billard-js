import { Canvas2D } from "./Canvas.js";
import { Table } from "./Table.js";
import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";
import { Hole } from "./Hole.js";
import { COLORS } from "./Color.js";
import { MouseHandler } from "./input/Mouse.js"
import { Control } from "./Control.js"

export class GameWorld {
    constructor(width,height,border,cornerOffset){
        this.canvas = new Canvas2D();
        this.canvas.initializeCanvas(width,height,border);
        
        this.table = new Table(this.canvas,border)
        this.won = false

        this.pos = {
            x:this.canvas.getWidth() - border - 1/4 *(this.canvas.getWidth() - 2*border),
            y:this.canvas.getHeight()/2
        }
        this.balls = [
            new Ball(new Vector2(border+1/4 *(this.canvas.getWidth() - 2*border),this.pos.y),new Vector2(0,0),18,COLORS.WHITE,this.canvas,true),
            new Ball(new Vector2(this.pos.x,this.pos.y),new Vector2(),18,COLORS.RED,this.canvas),
            new Ball(new Vector2(this.pos.x+33,this.pos.y+19),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*2,this.pos.y+19*2),new Vector2(),18,COLORS.PURPLE,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y+19*3),new Vector2(),18,COLORS.BLUE,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y+19*4),new Vector2(),18,COLORS.ORANGE,this.canvas),
            new Ball(new Vector2(this.pos.x+33,this.pos.y-19),new Vector2(),18,COLORS.GREEN,this.canvas),
            new Ball(new Vector2(this.pos.x+33*2,this.pos.y-19*2),new Vector2(),18,COLORS.BROWN,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y-19*3),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y-19*4),new Vector2(),18,COLORS.PURPLE,this.canvas),
            new Ball(new Vector2(this.pos.x+33*2,this.pos.y),new Vector2(),18,COLORS.BLUE,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y-19),new Vector2(),18,COLORS.ORANGE,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y+19),new Vector2(),18,COLORS.GREEN,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y),new Vector2(),18,COLORS.BROWN,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y+19*2),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y-19*2),new Vector2(),18,COLORS.RED,this.canvas),
        ]
        this.holes = [
            new Hole(new Vector2(border+cornerOffset,border+cornerOffset),this.canvas),
            new Hole(new Vector2(this.canvas.getWidth()/2-15,border),this.canvas),
            new Hole(new Vector2(this.canvas.getWidth()-border-cornerOffset,border+cornerOffset),this.canvas),
            new Hole(new Vector2(this.canvas.getWidth()-border-cornerOffset,this.canvas.getHeight()-border-cornerOffset),this.canvas),
            new Hole(new Vector2(this.canvas.getWidth()/2-15,this.canvas.getHeight()-border),this.canvas),
            new Hole(new Vector2(border+cornerOffset,this.canvas.getHeight()-border-cornerOffset),this.canvas)
        ]
        this.mouseHand = new MouseHandler();
        this.cont = new Control(this.balls[0],this.mouseHand,this.canvas);
    }

    checkRemove(ball,i){
        if (ball.isInHole())
        {
            if (ball.color == COLORS.BLACK){
                if (this.balls.length == 2 && this.balls[0].color == COLORS.WHITE){
                    this.won = true
                }
                this.finish = true
            }

            if (ball.mainBall && !this.finish) {
                this.cont.setActive(false)
                if (!this.cont.isPlacing() && this.balls.every(b => b.isStopped())){
                    this.cont.setWhiteBall(true)
                }
                //this.cont.setWhiteBall(true)
                //ball.color = "rgba(255,255,255,200)"
            }
            else if (ball.mainBall && !this.finish){
                this.balls.splice(i, 1);
            }
        }
        return
    }

    checkEnd(){
        if (this.finish){
            if (this.won){
                console.log("WON");
            }
            else(
                console.log("loose")
            )
        }
    }

    update(){
        this.balls.forEach((ball,i) => {
            ball.update(this.balls,this.holes)
            this.checkRemove(ball,i)
        })
        const everyCheck = this.balls.every(b => b.isStopped())
        if (everyCheck){
            this.checkEnd()
        }
        this.cont.setActive(everyCheck)
        this.cont.update()
    }

    draw(){
        this.table.draw()
        for(const hole of this.holes){
            hole.draw()
        }
        for(const ball of this.balls){
            ball.draw()
        }
        this.cont.draw()
    }

    clear(){
        this.canvas.clear()
    }
}