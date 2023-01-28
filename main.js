import { Canvas2D } from "./Canvas.js";
import { Table } from "./Table.js";
import { Vector2 } from "./Vector2.js";
import { Ball } from "./Ball.js";

const border = 60
const canvas = new Canvas2D();
canvas.initializeCanvas(1200,600,border);

const table = new Table(canvas,border)

const balls = [
    new Ball(new Vector2(200,100),new Vector2(0,0),18,"red",canvas),
]