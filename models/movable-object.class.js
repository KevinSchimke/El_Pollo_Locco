class MovableObject {
    x = 100;
    y = 250;
    width = 130;
    height = 150;
    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving-right');
    }

    moveLeft(){

    }
}