class MovableObject {
    x = 0;
    y = 275;
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