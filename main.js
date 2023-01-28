import { GameWorld } from "./GameWorld.js";

const width = 1200
const height = 600
const border = 60

class Game {
    constructor(){
        this.gameWorld = new GameWorld(width,height,border)
    }

    mainLoop(){
        this.gameWorld.clear();
        this.gameWorld.update();
        this.gameWorld.draw();
        //mouse.reset();
        requestAnimationFrame(() => { this.mainLoop() }) // pour le self
    }
 
    start(){
        this.mainLoop();
    }

}

const game = new Game();
game.start()