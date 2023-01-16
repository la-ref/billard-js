class Game {
    constructor(canvas){
        this.gameWorld = new GameWorld(canvas);
        this.canvas = canvas;
    }

    mainLoop(){
        this.canvas.clear();
        this.gameWorld.update();
        this.gameWorld.draw();
        mouse.reset();
        requestAnimationFrame(() => { this.mainLoop() }) // pour le self
    }
 
    start(){
        this.mainLoop();
    }

}

const canvas = new Canvas2D();
canvas.initializeCanvas(1450,858);

let poolGame = new Game(canvas);