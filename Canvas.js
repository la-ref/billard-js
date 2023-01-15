class Canvas2D {
    constructor(){
        this._canvas = document.getElementById('screen');
        this._context = this._canvas.getContext('2d');
        this.initializeCanvas();
    }

    initializeCanvas(){
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._context.clearRect(0,0,this._canvas.width,this._canvas.height)
    }

    drawImage(image,position){
        this._context.drawImage(image,position.x,position.y)
    }

    getWidth(){
        return this._canvas.width
    }

    getHeight(){
        return this._canvas.height
    }

}

let image = new Image();
image.src = "./images/table.png";
image.onload = function(){
    const canvas = new Canvas2D();
    const width = canvas.getWidth()
    const height = canvas.getHeight()
    console.log(width,height);
    canvas.drawImage(image, {x:(width/2)-(image.width/2),y:(height/2)-(image.height)/2});
}
