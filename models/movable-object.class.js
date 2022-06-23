class MovableObject {
    x = 0;
    y = 230;
    width = 180;
    height = 200;
    img;
    imageCache = [];
    speed = 0.15;
    currentImage = 0;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path)=>{
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving-right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed ;
        }, 1000/60);
    }
}