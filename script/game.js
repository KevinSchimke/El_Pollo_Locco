let canvas;
let ctx;
let character = new movableObject();

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log('May Character is', character);

}