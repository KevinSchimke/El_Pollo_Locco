class MovableObject {
    x = 0;
    y = 230;
    width = 180;
    height = 200;
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