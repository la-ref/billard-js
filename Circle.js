class Circle{
    constructor(position,r, ctx){
        this.position = (position !== null) ? position : new Vector2();
        this.r = (r !== null) ? r : 5;
        this.ctx = ctx;


        this.drawCircle();
    }

    drawCircle(){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#FFF';
        this.ctx.arc(this.position.x, this.position.y, this.r, 0, Math.PI*2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(position){
        this.position = (position !== null) ? x : this.position;
    }
}