import { Canvas2D } from "./Canvas.js";
import { Table } from "./Table.js";

const border = 60
const canvas = new Canvas2D();
canvas.initializeCanvas(1200,600,border);

const table = new Table(canvas,border)
