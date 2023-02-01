import { GameWorld } from "./GameWorld.js";

const width = 1200
const height = 600
const border = 60
const cornerOffset = 12

class Game {
    constructor(){
        this.gameWorld = new GameWorld(width,height,border,cornerOffset)
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