export class Canvas2D {
    constructor(){
        this._canvas = document.getElementById('screen');
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

    getWidth(){
        return this._canvas.width;
    }

    getHeight(){
        return this._canvas.height;
    }

    clear(){
        this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
    }

    getBoundingClientRect(){
        return this._canvas.getBoundingClientRect();
    }

    getContext(){
        return this._context;
    }

}