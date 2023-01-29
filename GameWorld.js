import { Canvas2D } from "./Canvas.js";
import { Table } from "./Table.js";
import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";
import { COLORS } from "./Color.js";
import { MouseHandler } from "./input/Mouse.js"
import { Control } from "./Control.js"

export class GameWorld {
    constructor(width,height,border){
        this.canvas = new Canvas2D();
        this.canvas.initializeCanvas(width,height,border);

        this.table = new Table(this.canvas,border)

        this.pos = {
            x:this.canvas.getWidth() - border - 1/4 *(this.canvas.getWidth() - 2*border),
            y:this.canvas.getHeight()/2
        }
        this.balls = [
            new Ball(new Vector2(border+1/4 *(this.canvas.getWidth() - 2*border),this.pos.y),new Vector2(0,0),18,COLORS.WHITE,this.canvas),
            new Ball(new Vector2(this.pos.x,this.pos.y),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33,this.pos.y+19),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*2,this.pos.y+19*2),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y+19*3),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y+19*4),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33,this.pos.y-19),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*2,this.pos.y-19*2),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y-19*3),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y-19*4),new Vector2(),18,COLORS.YELLOW,this.canvas),
            new Ball(new Vector2(this.pos.x+33*2,this.pos.y),new Vector2(2,2),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y-19),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*3,this.pos.y+19),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y+19*2),new Vector2(),18,COLORS.BLACK,this.canvas),
            new Ball(new Vector2(this.pos.x+33*4,this.pos.y-19*2),new Vector2(),18,COLORS.BLACK,this.canvas),
        ]
        this.mouseHand = new MouseHandler();
        this.cont = new Control(this.balls[0],this.mouseHand,this.canvas);
    }

    update(){
        for(const ball of this.balls){
            ball.update()
        }
        this.cont.setActive(this.balls.every(b => b.isStopped()))
        this.cont.update()
    }

    draw(){
        this.table.draw()
        for(const ball of this.balls){
            ball.draw()
        }
        this.cont.draw()
    }

    clear(){
        this.canvas.clear()
    }
}