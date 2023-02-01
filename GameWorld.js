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
        this.control = true

        this.pos = {
            x:this.canvas.getWidth() - border - 1/4 *(this.canvas.getWidth() - 2*border),
            y:this.canvas.getHeight()/2
        }
        this.balls = [
            new Ball(new Vector2(border+1/4 *(this.canvas.getWidth() - 2*border),this.pos.y),new Vector2(0,0),18,COLORS.WHITE,this.canvas),
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

    update(){

        this.balls.forEach((ball,i) => {
            ball.update(this.balls,this.holes)
            if (ball.isInHole())
            {
                if (ball.color == COLORS.WHITE){
                    this.control = false
                    this.cont.setActive(false)
                    console.log("PROUT")
                }
                this.balls.splice(i, 1);
            }
        })
        if (this.control){
            this.cont.setActive(this.balls.every(b => b.isStopped()))
        }
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
        if (this.control){
            this.cont.draw()
        }
    }

    clear(){
        this.canvas.clear()
    }
}