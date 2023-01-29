import { ButtonState } from "./ButtonState.js";
import { Vector2 } from "../Vector2.js";
export class MouseHandler{
    constructor(){
        this.left = new ButtonState();
        this.middle = new ButtonState();
        this.right = new ButtonState();
        this.position = new Vector2();

        document.onmousemove = (e) => {this.handleMouseMouve(e)};
        document.onmousedown = (e) => {this.handleMouseDown(e)} ;
        document.onmouseup = (e) => {this.handleMouseUp(e)};
    }
    
    handleMouseMouve(event){
        let x = event.pageX;
        let y = event.pageY;
        let rect = document.getElementById('main-canvas').getBoundingClientRect();
        this.position = new Vector2((x-rect.x),(y-rect.y));
    }

    handleMouseDown(event){
        if (event.which === 1){
            if (!this.left.down){
                this.left.pressed = true;
            }
            this.left.down = true;
        }
        else if (event.which === 2)
        {
            if (!this.middle.down){
                this.middle.pressed = true;
            }
            this.middle.down = true;
        }
        else if (event.which === 3)
        {
            if (!this.right.down){
                this.right.pressed = true;
            }
            this.right.down = true;
        }
    }

    handleMouseUp(event){
        if (event.which === 1){
            this.left.down = false;
        }
        else if (event.which === 2)
        {
            this.middle.down = false;
        }
        else if (event.which === 3)
        {
            this.right.down = false;
        }
    }
    
    reset(){
        this.left.pressed = false;
        this.middle.pressed = false;
        this.right.pressed = false;
    }
}