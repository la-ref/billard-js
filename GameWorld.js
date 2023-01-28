import { Canvas2D } from "./Canvas.js";
import { Table } from "./Table.js";
import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";

export class GameWorld {
    constructor(width,height,border){
        this.canvas = new Canvas2D();
        this.canvas.initializeCanvas(width,height,border);

        this.table = new Table(this.canvas,border)
        this.balls = [
            new Ball(new Vector2(200,100),new Vector2(0,0),18,"red",this.canvas)
        ]
    }

    update(){
        //this.stick.update();
    }

    draw(){
        this.table.draw()
        for(const ball of this.balls){
            ball.draw()
        }
    }

    clear(){
        this.canvas.clear()
    }
}