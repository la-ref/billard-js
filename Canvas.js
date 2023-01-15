class Canvas2D {
    constructor(){
        this._canvas = document.getElementById('screen');
        this._context = this._canvas.getContext('2d');
        initializeCanvas();
    }

    initializeCanvas(){
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._canvas.clearRect(0,0,this._canvas.width,this._canvas.height)
    }

}

const canvas = new Canvas2D();
