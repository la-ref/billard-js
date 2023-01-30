export class Vector2 {
    constructor(x,y){
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    copy(){
        return new Vector2(this.x,this.y)
    }

    addition(vector){
        this.x += vector.x
        this.y += vector.y
    }

    substract(vector){
        this.x -= vector.x
        this.y -= vector.y
    }

    addition2(vector,vector2){
        this.x = vector.x+vector2.x
        this.y = vector.y+vector2.y
    }

    substract2(vector,vector2){
        this.x = vector.x-vector2.x
        this.y = vector.y-vector2.y
    }

    scale(nb){
        this.x *= nb
        this.y *= nb
    }

    scale2(nb,vector){
        this.x = nb*vector.x
        this.y = nb*vector.y
    }

    product(vector){
        this.x *= vector.x
        this.y *= vector.y
    }

    product2(vector,vector2){
        this.x = vector.x*vector2.x
        this.y = vector.y*vector2.y
    }

    dotproduct(vector,vector2){
        return vector.x*vector2.x +vector.y*vector2.y
    }

    norm(){
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }

    distance(vector){
        return Math.sqrt(Math.pow(vector.x-this.x,2)+ Math.pow(vector.y-this.y,2))
    }

    normalize(){
        if (this.x && this.y){
            this.scale(1/this.norm())
        }
    }

    limit(val){
        const norme = this.norm()
        if (val <= norme){
            this.scale(val/norme)
        }
    }
}