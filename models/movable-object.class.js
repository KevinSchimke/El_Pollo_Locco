class MovableObject {
    x = 0;
    y = 265;
    width = 150;
    height = 170;
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