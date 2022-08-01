let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    document.getElementById('start_Screen_Image').classList.add('hide');
    document.getElementById('end_Screen_Image').classList.add('hide');
    document.getElementById('start_Buttton').classList.add('hide');
    document.getElementById('fullscreen_Button').classList.remove('hide');
    startGame();
}

function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, false);
}

function setFullscreen() {
    document.getElementById('canvas').requestFullscreen();
}

window.addEventListener("keydown", (e) => {

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }

});

window.addEventListener("keyup", (e) => {

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }

});