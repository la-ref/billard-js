let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){
    if (assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this,callback));
    }
    else{
        callback();
    }
}

function loadSprite(fileName){
    assetsStillLoading++;

    let spriteImage = new Image();
    spriteImage.src = './images/' + fileName;

    spriteImage.onload = function(){
        assetsStillLoading--;
    }
    return spriteImage;
}

function loadAssets(callback){
    sprites.background = loadSprite("table.png");
    sprites.stick = loadSprite("stick.png");
    assetsLoadingLoop(callback);
}