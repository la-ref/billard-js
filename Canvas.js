class Canvas2D {
    constructor(){
        this._canvas = document.getElementById('screen');
        this._context = this._canvas.getContext('2d');
    }

    initializeCanvas(width,height){
        this._canvas.width = width;
        this._canvas.height = height;
        this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
    }

    drawImage(image,position){
        this._context.drawImage(image,position.x,position.y);
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

}