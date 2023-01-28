import { Canvas2D } from "./canvas.js";
export class Table {

    /**
     * 
     * @param {Canvas2D} canvas 
     * @param {number} border
     */
    constructor(canvas,border){
        this.canvas = canvas
        this.border = border
        this.canvas.fillRect("rgb(26,130,30)")
        
        this.canvas.fillRect("brown",0,0,this.canvas.getWidth(),this.border)
        this.canvas.fillRect("brown",0,this.canvas.getHeight()-this.border,this.canvas.getWidth(),this.border)
        this.canvas.fillRect("brown",0,this.border,this.border,this.canvas.getHeight()-this.border)
        this.canvas.fillRect("brown",this.canvas.getWidth()-this.border,this.border,this.border,this.canvas.getHeight()-this.border)
    }

}