export class Canvas2D {

    constructor(){
        this._canvas = document.getElementById('main-canvas');
        this._context = this._canvas.getContext('2d');
    }

    initializeCanvas(width,height,border){
        this._canvas.width = width+2*border;
        this._canvas.height = height+2*border;
        this.clear();
    }

    drawImage(image,position,origin, rotation = 0){
        if (!position){
            position = new Vector2();
        }
        if (!origin){
            origin = new Vector2();
        }
        this._context.save();
        this._context.translate(position.x,position.y);
        this._context.rotate(rotation);
        this._context.drawImage(image,-origin.x,-origin.y);
        this._context.restore();
    }

    fillRect(color,posX,posY,width,height){
        this._context.fillStyle = color
        if (width != undefined && height != undefined && posX != undefined && posY != undefined) {
            this._context.fillRect(posX,posY,width,height)
        }
        else{
            this._context.fillRect(0,0,this._canvas.width,this._canvas.height)
        }
    }

    drawCircle(color,posX,posY,radius){
        if (posX != undefined && posY != undefined && color && radius) {
            this._context.beginPath();
            this._context.fillStyle = color;
            this._context.arc(posX, posY, radius, 0, Math.PI*2);
            this._context.fill();
            this._context.closePath();
        }
    }

    getWidth(){
        return this._canvas.width;
    }

    getHeight(){
        return this._canvas.height;
    }

    clear(){
        this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
    }

    getContext(){
        return this._context;
    }

    getCanvas(){
        return this._canvas;
    }

}